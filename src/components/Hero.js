import React, { Component } from 'react';
import { Earth } from './svg/Earth';
import { Moon } from './svg/Moon';
import { Rocket } from './svg/Rocket';
import { Sun } from './svg/Sun';
import '../styles/Hero.scss';

class Hero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			takeoff: "",
			earthspin: ""
		}		
	}
	
	takeoffAnimation = () => {		
		this.setState(prevState => ({
				takeoff: "takeoff"
		}));
		
		setTimeout(()=>{this.setState(prevState => ({
				takeoff: ""
		}));}, 5000);
	}
	
	earthspinAnimation = () => {		
		this.setState(prevState => ({
				earthspin: "earthspin"
		}));
		
		setTimeout(()=>{this.setState(prevState => ({
				earthspin: ""
		}));}, 5000);
	}
	
	render() {
		return (
			<div id="scrollTo--top" className="section--hero">
				<div className="container--hero">
					<h1>Hello World!</h1>
					<h1>I'm Sasha!</h1>
					<Earth earthspinAnimation={this.earthspinAnimation} earthspin={this.state.earthspin}/>
					<Rocket takeoffAnimation={this.takeoffAnimation} takeoff={this.state.takeoff}/>
					<Moon changeTimeOfDay={this.props.changeTimeOfDay} />
					<Sun changeTimeOfDay={this.props.changeTimeOfDay} />
				</div>
			</div>
		);
	}
}

export default Hero;