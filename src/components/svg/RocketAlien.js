import React, { Component } from 'react';
import '../../styles/RocketAlien.scss';

export class RocketAlien extends Component {
	render() {
		return (
			<svg role="presentation button" tabIndex="0" viewBox="0 0 220.6 102.6" onClick={this.props.takeoffAnimation} onKeyPress={this.props.takeoffAnimation} className={`hero__image--rocket-alien ${this.props.takeoff}`}>
			<path className="rocket-alien__fire--accent" d="M143.9,41.8c3.9-7.5,12.5-11.4,20.7-11.7c2.1-0.1,4.3-0.2,6.3,0.2c2,0.3,4.2,0.5,6.1,1.3c0.5,0.2,1,0.5,1.5,0.7
				c0.5,0.3,0.2,0.7-0.1,1c-0.7,0.6-1.8,0.9-2.6,1.1c-0.4,0.1-1.3,0-1.6,0.3c-1,0.7,0.8,0.9,1.2,1c1.1,0.2,2.1,0.5,3.2,0.8
				c4.1,1.2,8.1,2.9,12,4.5c1.8,0.8,3.6,1.6,5.4,2.5c1.8,0.9,4.1,1.8,5.6,3.2c0.2,0.2,0.3,0.3,0.5,0.5c-1.9,0.8-3.9,1.3-6,1.7
				c-1,0.2-2.1,0.4-3.1,0.6c-0.4,0.1-1.7,0-1.5,0.8c0.1,0.4,1,0.7,1.3,0.9c3.9,2,7.3,4.5,10.4,7.6c3,3.1,5.1,6.8,6.5,10.8
				c0.4,1,0.6,2.1,0.9,3.1c0.1,0.4,0.1,0.8,0.2,1.2c0,0.2,0.2,0.6,0.2,0.8c-0.1,0.3-0.2,0.3-0.5,0.3c-1,0-1.9-0.3-2.8-0.7
				c-1-0.4-1.8-1.1-2.8-1.4c-1.3-0.5-1.7,0.5-1.5,1.6c0.2,0.9,0.6,1.8,1.4,2.4c1.7,1.1,3.5,1.8,5.4,2.4c2.1,0.7,4.3,1.2,6.4,2
				c0.8,0.3,2.1,0.6,2.5,1.4c0.6,1-0.3,1.8-1,2.3c-3.3,2.5-7.6,3.7-11.5,4.8c-4.1,1.1-8.4,2.2-12.6,2.6c-4.4,0.4-8.7,0.6-13.1-0.2
				c-3.9-0.7-8.3-2.5-11.1-5.5c-0.3-0.3-1-1.3-1.4-1.1c-0.5,0.2-0.4,1.1-0.4,1.5c0,1,0.1,1.9,0.6,2.8c0.2,0.4,0.5,0.9,0.5,1.4
				c0,0.6-0.4,0.3-0.9,0.1c-1.1-0.4-2-0.8-2.9-1.5c-1.7-1.2-3.2-2.5-4.5-4.2c-0.3-0.5-0.7-0.9-1-1.4c-0.5-0.8-1.2-0.3-1.2,0.5
				c0,0.8,0.3,1.8,0.7,2.5c2.8,5.1,6.6,9.7,10.3,14.1c-2,0.2-4.2-0.7-6.1-1.4c-2-0.7-3.9-1.8-5.7-2.9c-3.7-2.2-7.1-5.1-10.3-7.9
				c-3.2-2.7-5.7-6.2-7.3-10c-1.7-3.9-2.3-7.9-2.3-12.1c0.1-4.1,0.8-8.5,2.4-12.3c0.4-0.9,0.4-2.1,0.5-3.1c0.1-1,0.4-2,0.6-3.1
				c0.4-2,1.2-4,2.1-5.8C143.5,42.4,143.7,42.1,143.9,41.8z"/>
			<path className="rocket-alien__fire--main" d="M163.2,100.4c1.2,0.4,2.4,0.9,3.6,1.1c0.6,0.1,1.2,0.2,1.7,0.3c0.6,0.1,1.3-0.1,1.9-0.1
				c-2.3-2.7-4.6-5.5-6.7-8.3c-1.1-1.4-2.1-2.9-3.1-4.4c-0.6-1-2.5-3.6-1.6-4.7c1.8,2.8,4.1,5.3,7,6.9c0.7,0.4,1.5,0.6,2.3,0.9
				c0.5,0.1,0.7,0.3,0.9-0.2c0.1-0.4,0-0.7-0.1-1.1c-0.2-0.7-0.7-1.4-0.8-2.1c-0.1-0.8-0.2-1.7-0.1-2.5c5.5,6.4,15.1,7.9,23.1,7.1
				c4.5-0.4,8.9-1.3,13.2-2.3c3.9-0.9,8.2-2.2,11.6-4.2c1.4-0.8,4.3-2.2,3.1-4.2c-0.5-0.8-1.8-1.3-2.7-1.6c-1-0.4-1.9-0.7-3-1
				c-2-0.6-4.1-1.2-6.1-1.9c-1-0.4-2-0.8-2.8-1.5c-0.9-0.7-1.1-1.5-1.3-2.6c-0.2-1.2,1.7-0.1,2,0.1c0.9,0.5,1.9,1,2.9,1.3
				c0.4,0.1,2.8,0.6,2.8-0.1c-0.1-1-0.2-2.1-0.5-3.1c-1.1-4-2.7-7.9-5.3-11.2c-1.7-2.2-3.8-4.6-6.1-6.2c-1.2-0.8-2.4-1.7-3.6-2.5
				c-1.3-0.8-2.6-1.4-4-2.1c2.1-0.3,4.2-0.6,6.2-1.2c1-0.3,2.2-0.4,3.2-0.9c0.3-0.1,1.2-0.4,1.3-0.7c0.1-0.4-0.5-0.9-0.8-1.1
				c-0.7-0.6-1.6-1.1-2.4-1.5c-1.1-0.6-2.1-1.1-3.2-1.6c-1.8-0.9-3.6-1.7-5.4-2.5c-2.7-1.1-5.3-2.1-8-3.1c-1.4-0.5-2.7-1-4.1-1.4
				c-1.4-0.4-2.8-0.9-4.3-0.9c1-0.1,2-0.3,3-0.6c0.7-0.2,2.1-1,2-1.9c-0.1-0.7-1.8-1.3-2.4-1.5c-1-0.3-2.1-0.6-3.2-0.8
				c-4-1-8.6-0.9-12.6-0.3c-4.2,0.6-8.2,2.1-11.6,4.6c-3.4,2.5-5.7,5.8-7.4,9.6c-0.8,1.9-1.3,3.9-1.7,5.9c-0.2,1-0.3,2.1-0.5,3.1
				c-0.1,1.1-0.6,2-0.9,3c-1.3,4.1-1.8,8.3-1.8,12.6c-0.1,8.4,4.5,16.2,10.7,21.5C152.6,94.3,157.5,98,163.2,100.4z M214.2,82.5
				c0.7,0.5,0.7,1,0,1.6c-0.7,0.5-1.4,1-2.2,1.4c-1.5,0.9-3.1,1.4-4.8,2c-3.3,1.2-6.8,2-10.2,2.7c2.3-0.8,11-3.8,8.1-7.5
				c-0.5-0.9-1.9-1.4-2.8-1.7c-1-0.4-1.9-0.7-2.9-0.9c-2.1-0.6-4.1-1.2-6.1-2c-0.9-0.3-2.1-1-2.4-1.9c1.2,0.6,2.2,1.2,3.4,1.5
				c0.9,0.3,11.6,2,12.7,2.3C209.4,80.7,212,81.2,214.2,82.5z M176.6,41.3c-3.9-1.7-7.9-3.3-11.9-4.6c-0.4-0.1-0.7-0.2-1.1-0.3
				c1.2-0.7,2.2-2.3,1-3.4c-0.9-1-2.8-1.3-3.9-1.6c4.4-0.3,9.5-0.1,13.5,1.9c-0.5,0.7-1.7,0.9-2.6,1.1c-0.5,0.1-1.3,0-1.7,0.5
				c-0.3,0.4-0.3,1,0.1,1.3c0.3,0.3,0.7,0.2,1.1,0.3c2,0.4,4,1,5.9,1.7c4.1,1.5,8.1,3,12.1,4.9c2.2,1.1,4.4,2.1,6.5,3.5
				c-1.2,0.7-3.1,0.9-4.5,1.2c-1.5,0.3-3.2,0.5-4.5,0.8C188.7,46.4,178,41.9,176.6,41.3z M195.7,54.5c0.4,0.3,0.8,0.5,1.1,0.8
				c0.7,0.6,1.5,1.2,2.2,1.9c1.4,1.4,2.7,2.8,3.8,4.4c2.2,3.2,3.6,6.6,4.6,10.3c-1.1-0.4-2.2-0.9-3.4-1.2c-0.8-0.2-0.8-0.3-1-1.1
				c-0.3-0.9-0.5-1.8-0.9-2.7c-0.6-1.7-1.4-3.3-2.3-4.9c-1.8-3-4.2-5.6-6.9-7.9C194,54.2,194.9,53.9,195.7,54.5z M175.2,59.3
				c-0.7-1.1-0.9-2.2-0.9-3.6c0-0.3,0.8-2.8,0.7-2.9c-0.8-0.7-1.6-1.4-2.5-2c-1.8-1.2-3.6-2.2-5.5-3.1c-3.7-1.8-7.8-3-11.9-3.7
				c-1.8-0.3-3.6-0.6-5.4-0.8c3.7-2.2,8.2-2,12.3-1.2c4.1,0.7,8.2,1.9,12,3.4c4.3,1.7,8.4,3.6,12.5,5.7c0.8,0.4,1.5,0.8,2.2,1.3
				c0.1,0.1,1.2,0.6,0.9,0.8c-0.4,0.3-0.8,0.5-1.2,0.7c-1,0.5-2.1,0.9-3.1,1.4c-0.9,0.4-1.9,0.8-2.6,1.5c-0.8,0.9,4.3,3.9,5,4.3
				c-1,0.1-1.9,0.3-2.9,0.4c2.7,1.7,4.9,4.3,7,6.7c2.2,2.4,4.3,4.9,6.4,7.5c-8.3-1.4-15.3-7-20.6-13.3
				C176.7,61.4,175.8,60.4,175.2,59.3z M177.5,80.4c1.5,0.8,3,1.3,4.6,1.7c0.8,0.2,1.7,0.1,2.5,0.3c0.8,0.3,1.7,1.1,2.4,1.5
				c2.9,1.8,5.8,3.5,8.8,5.1c-0.4,0.1-0.8,0.4-1.3,0.6c-4.1,1.2-8.4,0.9-12.5,0.1c-2-0.4-4-0.9-6-1.5c-1.1-0.3-2.2-0.5-3.1-1.2
				c-0.9-0.7-1.7-1.3-2.6-2c-0.7-0.6-2.4-1.9-2.1-3c2.7,1.9,5.7,3.5,9,3.9c0.8,0.1,1.7,0.1,2.5,0c0.5,0,0.8,0,0.8-0.6
				c0-0.4-0.3-0.7-0.5-1c-0.5-0.6-1.2-1-1.5-1.7C178,82,177.6,81.2,177.5,80.4z M160.2,97.1c-0.4-0.3-0.8-0.6-1.1-0.9
				c-2.6-2.2-5.3-4.4-7.9-6.6c-3.1-2.7-6.3-5.7-8.5-9.2c-2.2-3.5-3.3-7.6-3-11.7c0.1-2.1,0.6-4,1.1-6c0.1,0.6,0.4,1.2,0.3,1.8
				c-0.1,0.3-0.1,0.7-0.1,1c-0.1,0.7-0.1,1.5,0,2.2c0.1,1.5,0.5,2.9,0.9,4.3c1.1,3.1,2.8,5.9,4.7,8.5c3.8,5.1,8.5,9.6,13.4,13.6
				c2.1,1.7,4.4,3.2,6.3,5c-1.4-0.3-2.8-0.7-4.1-1.2C161.6,97.6,160.7,97.5,160.2,97.1z"/>
			<path className="rocket-alien__rocket--accent" d="M165.8,14.6C152.2-1.2,123,1.5,114.9,14.3C108.6,11,101.7,8,94.4,6C82.5,2.8,69,1,55.4,1
				c-8.9,0-17.8,0.7-25.7,2.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.3-0.1-0.4,0C13.1,5.9,2.2,10.8,1.3,14.9C0.5,18.7,7.2,28.1,19,38.6
				l0.2,0.2c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2,0.1,0.4,0.1c16.3,14.3,37.8,26,57.8,31.5c6.6,1.8,13.4,2.8,21.2,3.2
				c1.3,14.9,24.5,31.3,43.9,24.7c0,0,2.8-0.8,2.7-1.6c-0.2-1.3-25.7-11.1-26.7-23.4c2.7-0.1,5.3-0.2,7.8-0.3c1,0,2.1-0.1,3.1-0.1
				c0,1.7,1.1,3.3,2.8,3.7c2.1,0.6,4.2-0.6,4.8-2.7l11.3-41.4c0.6-2.1-0.6-4.2-2.7-4.8c-2-0.5-4,0.6-4.7,2.5c-0.4-0.3-0.8-0.5-1.3-0.8
				c-2-1.3-4-2.6-6.2-4c-0.6-0.4-1.2-0.8-1.8-1.2c6.4-10.9,34.4-6.2,35.3-7.2C167.8,16.7,165.8,14.6,165.8,14.6z"/>
			<path className="rocket-alien__rocket--window" d="M105.6,73.8c-10.7,0-19.5-1.1-27.9-3.4c-20.1-5.5-41.7-17.3-58-31.7c7.5-16.9,9.4-28.5,9.6-35.3
				c8-1.4,17-2.2,26-2.2c13.6,0,27.1,1.7,39,5c16.4,4.5,30.4,13.8,41.7,21.3c1.6,1.1,3.2,2.1,4.7,3.1c-0.9,3-5.8,20.8-5.9,21
				c-4.3,15.8-5.4,20-5.6,21.2c-2.2,0.1-4.4,0.2-6.8,0.4C117,73.4,111.5,73.7,105.6,73.8C105.6,73.8,105.6,73.8,105.6,73.8z"/>
			<path className="rocket-alien__rocket--main" d="M94.4,5.8c-23-6.3-47.7-6-65.5-2.8c-0.2,7.8-2.4,19.5-9.7,35.7c13.8,12.2,35,25.6,58.4,32c19,5.2,37.3,3,52,2.4
				c-0.2-0.6,11.4-42.5,11.6-42.8C128.8,22.4,113.3,11,94.4,5.8z M34.9,28.6c-2.4,0.1-4.4-1.8-4.5-4.2c-0.1-2.4,1.8-4.4,4.2-4.5
				c2.4-0.1,4.4,1.8,4.5,4.2C39.2,26.5,37.3,28.5,34.9,28.6z M52,37.3c-4.4,0.1-8.1-3.3-8.3-7.7s3.3-8.1,7.7-8.3s8.1,3.3,8.3,7.7
				C59.9,33.5,56.4,37.2,52,37.3z M127.6,49.5c-1.1,4.1-2.7,9.9-3.9,14.7c-0.1,0.3-0.1,0.5-0.2,0.8c-0.1,0-0.3,0-0.4,0
				c-13.3,0.7-28.3,1.6-43.1-2.5c-4.4-1.2-8.6-2.6-12.6-4.2l11.9-46.8c4.4,0.7,8.8,1.6,12.9,2.8c14.9,4.1,28.5,12.8,39.6,20
				C130.9,37.6,129.5,42.4,127.6,49.5z"/>
			<path className="rocket-alien__spots" d="M103.6,65.7c-4-0.1-9.2-0.4-14.6-1.4c0.3-0.7,0.7-1.4,1.3-2l0.2-0.2l-0.2-0.1c-4.7-2.6-8.2-6.8-10.1-11.8
				l-0.1-0.1H80c-3.1,0-5.6-1.1-7.5-3.3c-1.6-1.9-2.7-4.2-3.7-6.5L68.8,40c-1-2.3-2.1-2.4-3.9-2.6c-0.3,0-0.7-0.1-1.1-0.1
				c-1-0.1-1.6-0.4-1.8-0.8c-0.1-0.3-0.1-0.7,0.2-1.2c0.3-0.5,0.7-0.8,1.2-1c1.8-0.5,1.6-1.7,1.4-2.8c-0.2-1.1-0.3-1.7,0.8-2.1
				c0.2,0,0.3-0.1,0.4-0.1c0.6,0,1,0.5,1.4,1c0.2,0.2,0.3,0.4,0.5,0.6c0.6,0.6,1.3,0.7,1.9,0.7c0.3,0,0.6,0,0.9,0c0.3,0,0.6,0,0.8,0
				c0.8,0,1.2,0.2,1.4,0.7c0.3,0.7-0.2,1.5-0.7,2.2c-0.3,0.4-0.6,0.8-0.7,1.2c-0.3,1.1,0.4,2.2,1,3.1c0.2,0.3,0.4,0.5,0.5,0.7
				c1.3,2.1,2.9,4.8,5.8,5.5l0.3,0.1l0-0.3c-0.3-2.5-0.1-4.9,0.5-7.3c1.2-5,3.9-9.2,7.9-12.3c3.9-3,8.7-4.7,13.6-4.7
				c1.7,0,3.4,0.2,5.1,0.6c5.7,1.3,10.6,4.8,13.7,9.9s4.1,10.9,2.7,16.7c-0.6,2.6-1.7,5-3.1,7.2l-0.2,0.3l0.4,0c0.1,0,0.2,0,0.3,0
				c2.3,0,4.5-1.4,6.3-2.5c0.2-0.1,0.5-0.3,0.8-0.4c1-0.5,2.1-1.1,2.3-2.3c0.1-0.4,0-0.9-0.1-1.4c-0.1-0.8-0.3-1.7,0.3-2.2
				c0.2-0.2,0.4-0.3,0.7-0.3c0.5,0,1,0.3,1.6,0.7c0.7,0.4,1.3,0.8,2.1,0.8c0.2,0,0.5,0,0.7-0.1c0.2-0.1,0.5-0.2,0.7-0.3
				c0.4-0.2,0.9-0.4,1.3-0.4c0.3,0,0.6,0.1,0.8,0.4c0.8,0.8,0.5,1.3-0.2,2.2c-0.6,0.8-1.4,1.9,0,3.1c0.4,0.3,0.6,0.8,0.6,1.4
				c0,0.5-0.1,0.9-0.3,1.1c-0.2,0.2-0.4,0.3-0.8,0.3l0,0c-0.8,0-1.8-0.5-2.5-0.8l-0.1-0.1c-0.7-0.3-1.3-0.4-1.8-0.4
				c-1.2,0-2.1,0.7-3.1,1.6c-0.3,0.2-0.5,0.5-0.8,0.7c-1.5,1.2-3.1,2.4-4.9,3.2c-1.2,0.5-2.4,0.8-3.6,0.8c-1.3,0-2.6-0.3-3.9-0.9
				l-0.1-0.1l-0.1,0.1c-3.4,3-7.5,4.8-12,5.4l-0.3,0l0.1,0.2C103.5,65.1,103.6,65.4,103.6,65.7z"/>
			<path className="rocket-alien__body " d="M138.2,53.8c0-0.6-0.3-1.1-0.8-1.5c-2.5-2.1,1.9-3.4-0.1-5.3c-1-1-2.3-0.2-3.3,0.2c-1.9,0.7-3.6-2.3-5.1-1
				c-1.1,0.9-0.1,2.7-0.3,3.8c-0.2,1.4-1.9,1.9-3,2.6c-2,1.3-4.2,2.6-6.5,2.5c1.4-2.2,2.5-4.6,3.2-7.3c2.8-12-4.6-24-16.6-26.8
				c-12-2.8-24,4.6-26.8,16.6c-0.6,2.5-0.7,5-0.5,7.4c-2.7-0.6-4.2-3.1-5.6-5.4c-0.7-1.1-1.9-2.3-1.5-3.7c0.3-1.1,2-2.2,1.4-3.5
				c-0.8-1.8-3.6,0.1-5-1.3c-0.7-0.8-1.2-2-2.6-1.6c-2.7,0.8,0.9,4-2.2,4.8c-0.6,0.2-1,0.5-1.3,1.1c-0.9,1.6,0.4,2.1,1.8,2.3
				c2.5,0.3,3.7,0,4.9,2.6c1,2.4,2.1,4.8,3.8,6.8c2.1,2.4,4.6,3.3,7.6,3.3c1.8,5,5.4,9.3,10.1,11.9c-0.6,0.7-1.1,1.5-1.4,2.3
				c5.1,1,10.1,1.4,15.1,1.5c-0.1-0.4-0.2-0.8-0.3-1.2c4.5-0.5,8.7-2.5,12.1-5.4c2.5,1.1,5,1.2,7.7,0.1c1.8-0.8,3.4-2,4.9-3.2
				c2-1.6,2.9-3,5.6-1.9C135,54.9,138.4,56.4,138.2,53.8z M82.4,34.5c0.2-0.8,0.9-1.2,1.7-1c0.8,0.2,1.2,0.9,1,1.7
				c-0.2,0.8-0.9,1.2-1.7,1C82.7,36,82.2,35.2,82.4,34.5z M87,42.3c-0.4,1.7-2.2,2.8-3.9,2.4c-1.7-0.4-2.8-2.2-2.4-3.9
				c0.4-1.7,2.2-2.8,3.9-2.4C86.4,38.8,87.5,40.6,87,42.3z M114.5,49.9c-0.2,0.8-0.9,1.2-1.7,1c-0.8-0.2-1.2-0.9-1-1.7
				c0.2-0.8,0.9-1.2,1.7-1C114.2,48.4,114.7,49.1,114.5,49.9z M115.4,42.4c0.4-1.5,1.9-2.4,3.4-2.1c1.5,0.4,2.4,1.9,2.1,3.4
				c-0.4,1.5-1.9,2.4-3.4,2.1C116,45.5,115,43.9,115.4,42.4z M117.4,51.1c-0.8-0.2-1.3-1-1.1-1.8c0.2-0.8,1-1.3,1.8-1.1s1.3,1,1.1,1.8
				C119,50.8,118.2,51.3,117.4,51.1z"/>
			<circle className="rocket-alien__eye--shadow" cx="102.5" cy="37.8" r="12.6"/>
			<path className="rocket-alien__eye--white" d="M114.7,39.9c-1.1,6.6-7.1,11.1-13,10.1c-5.9-1-9.9-7.2-8.7-13.8c1.1-6.6,6.8-11.2,12.8-10.2
				C111.7,27,115.8,33.3,114.7,39.9z"/>
			<path className="rocket-alien__iris" d="M111.4,37.5c-0.7,0.4-1.6,0.6-2.5,0.5c-2-0.3-3.4-2.2-3-4.2c0.2-1,0.8-1.9,1.6-2.4c-0.7-0.4-1.5-0.6-2.3-0.8
				c-4.1-0.7-8,2.1-8.7,6.2c-0.7,4.1,2.1,8,6.2,8.7c4.1,0.7,8-2.1,8.7-6.2C111.4,38.7,111.4,38.1,111.4,37.5z"/>
			<path className="rocket-alien__pupil" d="M109.1,38.1c-0.1,0-0.1,0-0.2,0c-2-0.3-3.3-2.2-3-4.2c-0.2-0.1-0.4-0.1-0.6-0.2c-2.5-0.4-4.9,1.3-5.4,3.8
				c-0.4,2.5,1.3,4.9,3.8,5.4s4.9-1.3,5.4-3.8C109.1,38.7,109.1,38.4,109.1,38.1z"/>
			<path className="rocket-alien__tongue" d="M109.7,53.4c-0.1,0-0.3,0-0.4,0c-0.3,0-0.5,0.1-0.8,0.1c-0.2,0-0.3,0-0.5,0c-0.3,0-0.5,0-0.8,0
				c-0.2,0-0.4,0-0.5,0c-0.8,0-1.7-0.1-2.6-0.2c-0.1,0-0.3,0-0.4-0.1c-1.4-0.2-2.9-0.6-4.4-1.1c-0.9-0.3-1.9-0.7-2.7-1.1
				c-0.2-0.1-0.4-0.2-0.6-0.3c-0.8-0.4-1.6-0.8-2.3-1.2c-0.3-0.2-0.5-0.3-0.8-0.5c-0.1-0.1-0.3-0.2-0.4-0.3c-0.3-0.2-0.5-0.4-0.7-0.6
				c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.2-0.4-0.4-0.7-0.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.3-0.3-0.6-0.6-0.8-0.9c-1.7,4.1-0.6,8.7,2.6,11.8
				c0,0,1.5,1.2,2.3,1.7c1,0.6,2.1,1,3.2,1.3c1.2,0.3,2.8,0.3,3.9,0.3v0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0
				c0.1,0,0.2,0,0.3,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0c2.1-0.5,4-1.5,5.5-3
				c0.5-0.5,0.9-1.1,1.3-1.8c0.6-1,1-2.1,1.2-3.2C110.4,53.2,110,53.3,109.7,53.4z"/>
			<path className="rocket-alien__teeth" d="M110.8,53.2c-3,0.7-7.2,0.4-11.5-1c-4.2-1.4-7.7-3.6-9.7-6c-1.7,4.1-0.6,8.7,2.6,11.8c0,0,0,0,0,0
				c0,0,0-0.1,0-0.1c0.6-1.6,2.7-2.4,5-1.8c0.3,0.1,0.5,0.1,0.8,0.2c1.2,0.4,2.3,1.2,2.9,2.1c0.7,0.9,0.9,1.9,0.6,2.8
				c0.6,0,1-0.1,1.2-0.2c2.8-0.6,5.2-2.2,6.8-4.8C110.2,55.4,110.6,54.3,110.8,53.2z"/>
			<path className="rocket-alien__mouth" d="M110.8,53.2c-1.3,0.3-2.9,0.4-4.5,0.4l0,2.2l-2.4-0.2l0.3-2.2c-0.4-0.1-0.9-0.1-1.3-0.2l-0.3,2.4L99.9,55
				l0.6-2.4c-0.4-0.1-0.9-0.3-1.3-0.4c-0.1,0-0.1,0-0.2-0.1l-0.7,2.4l-2.5-1l1-2.3c-0.4-0.2-0.9-0.4-1.3-0.6l-0.9,1.9l-2.1-1.2l1.1-1.8
				c-1.7-1-3.1-2.2-4.1-3.4c-1.7,4.1-0.6,8.7,2.6,11.8c0,0,0.1,0,0.2,0.1c0,0,0,0,0,0c0.6-1.7,3.1-2.3,5.6-1.5c2.5,0.9,4,3,3.4,4.7
				c0.7,0,1.2-0.1,1.5-0.2c2.8-0.6,5.2-2.2,6.8-4.8C110.2,55.4,110.6,54.3,110.8,53.2z"/>
			</svg>
		)
	}
}