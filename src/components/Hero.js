import React, { Component } from 'react';
import { Earth } from './svg/Earth';
import { SaturnSmooth } from './svg/SaturnSmooth'
import { Moon } from './svg/Moon';
import { Rocket } from './svg/Rocket';
import { RocketAlien } from './svg/RocketAlien';
import { Sun } from './svg/Sun';
import { EarthMinimal } from './svg/EarthMinimal';
import { Jupiter } from './svg/Jupiter';
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
		
		setTimeout(()=>{this.props.changePlanet();}, 4000);
		
		setTimeout(()=>{this.setState(prevState => ({
				takeoff: ""
		}));}, 4000);
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
			
					<SaturnSmooth earthspinAnimation={this.earthspinAnimation} earthspin={this.state.earthspin}/>
			
					<Moon changeTimeOfDay={this.props.changeTimeOfDay} />
			
					<Sun changeTimeOfDay={this.props.changeTimeOfDay} />
			
					<EarthMinimal changeTimeOfDay={this.props.changeTimeOfDay} />
			
					<Jupiter changeTimeOfDay={this.props.changeTimeOfDay} />
			
					<Rocket takeoffAnimation={this.takeoffAnimation} takeoff={this.state.takeoff}/>
			
					<RocketAlien takeoffAnimation={this.takeoffAnimation} takeoff={this.state.takeoff}/>
			
					
				</div>
			</div>
		);
	}
}

export default Hero;