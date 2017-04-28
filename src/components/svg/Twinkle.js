import React, { Component } from 'react';
import '../../styles/Twinkle.scss';

export class Twinkle extends Component {
	render() {
		return (
			<svg role="presentation" viewBox="0 0 19.5 19.5">
			<polygon className="twinkle" points="9.8,0 13.2,6.3 19.5,9.7 13.2,13.2 9.8,19.5 6.3,13.2 0,9.7 6.3,6.3 "/>
			</svg>
		)
	}
}