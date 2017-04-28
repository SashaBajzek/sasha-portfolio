import React, { Component } from 'react';
import '../../styles/Star.scss';

export class Star extends Component {
	render() {
		return (
			<svg role="presentation" viewBox="0 0 101.4 105.2" onClick={this.props.changeTimeOfDay} className="hero__image--star" >
			<polygon className="star" points="98.8,87.6 62.6,79.2 36.1,105.2 33,68.2 0,51.1 34.2,36.6 40.3,0 64.7,28.1 101.4,22.6 82.2,54.4 "/>
			</svg>
		)
	}
}