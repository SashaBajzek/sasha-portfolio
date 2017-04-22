import React, { Component } from 'react';
import { Earth } from './svg/Earth';
import { Moon } from './svg/Moon';
import { Rocket } from './svg/Rocket';
import { Sun } from './svg/Sun';
import '../styles/Hero.scss';

class Hero extends Component {
	render() {
		return (
			<div id="scrollTo--top" className="section--hero">
				<div className="container--hero">
					<h1>Hello World!</h1>
					<h1>I'm Sasha!</h1>
					<Earth />
					<Rocket />
					<Moon changeTimeOfDay={this.props.changeTimeOfDay} />
					<Sun changeTimeOfDay={this.props.changeTimeOfDay} />
				</div>
			</div>
		);
	}
}

export default Hero;