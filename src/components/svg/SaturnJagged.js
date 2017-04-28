import React, { Component } from 'react';
import '../../styles/SaturnJagged.scss';

export class SaturnJagged extends Component {
	render() {
		return (
			<svg role="presentation" viewBox="0 0 115 65.6" className="saturn-jagged">
			<path className="saturn-jagged__crater" d="M57.9,1.7c20.5-0.3,32.7,13.2,32.7,30.3S74.3,65.6,57.2,65.6s-31-13.9-31-31C26.2,17.4,40.8,1.9,57.9,1.7z"/>
			<path className="saturn-jagged__crater--shadow" d="M90.2,26.3c-3-16.9-18.5-28-37.3-24.3c-16.9,3-28.1,19.2-25,36c3,16.9,19.2,28.1,36,25
				C80.7,59.9,93.2,43.2,90.2,26.3z M52.9,9.2c-0.4-2.1,0.5-4,2-4.2c1.5-0.3,2.9,1.2,3.3,3.3c0.4,2.1-0.5,4-2,4.2
				C54.8,12.7,53.3,11.2,52.9,9.2z M30.9,35.1c-1.6-0.8-1-5.2,1.3-9.9s5.4-7.8,7-7.1c1.6,0.8,1,5.2-1.3,9.9
				C35.6,32.7,32.5,35.8,30.9,35.1z M69.5,22.6C66.1,18,65,13,67.1,11.4s6.6,0.9,10,5.5s4.5,9.6,2.4,11.2S73,27.2,69.5,22.6z
				 M77.6,39.7c0.3,1.4-1.7,3-4.4,3.5s-5.1-0.3-5.3-1.7c-0.3-1.4,1.7-3,4.4-3.5C75,37.4,77.4,38.3,77.6,39.7z M48.2,48.9
				c-2.1-5.3-2-10.4,0.3-11.3s5.9,2.7,8,8s2,10.4-0.3,11.3C53.8,57.8,50.3,54.1,48.2,48.9z"/>
			<path className="saturn-jagged__body--main" d="M90.7,26.7c-3-16.9-19.2-28.1-36-25c-16.9,3-28.1,19.2-25,36c3,16.9,19.2,28.1,36,25
				C82.5,59.6,93.7,43.6,90.7,26.7z M54.7,8.8c-0.4-2.1,1.1-4.1,3.2-4.5s4.2,1,4.6,3.1c0.4,2.1-1.1,4.1-3.2,4.5
				C57.1,12.3,55.1,10.8,54.7,8.8z M33.6,35.2c-2.1-1-1.6-6.2,1-11.5s6.4-8.8,8.5-7.8s1.6,6.2-1,11.5S35.7,36.2,33.6,35.2z M71.3,22.3
				c-3.4-4.6-4.1-9.9-1.4-11.9c2.6-2,7.6,0.2,11,4.8c3.4,4.6,4.1,9.9,1.4,11.9C79.7,29.1,74.7,26.8,71.3,22.3z M81.9,38.1
				c0.3,1.9-2.2,3.9-5.6,4.5c-3.4,0.6-6.5-0.4-6.9-2.3c-0.3-1.9,2.2-3.9,5.6-4.5C78.5,35.2,81.6,36.2,81.9,38.1z M49.9,48.6
				c-2.1-5.3-1.4-10.7,1.7-11.9c3.1-1.2,7.3,2.1,9.4,7.5c2.1,5.3,1.4,10.7-1.7,11.9C56.3,57.3,52,53.9,49.9,48.6z"/>
			<path className="saturn-jagged__ring--accent" d="M35.4,48.1C12.1,38-0.6,26.4,1.1,21.3c1.4-4.4,12.3-5.1,29.2-1.8c-0.7,1.2-1.4,2.5-2,3.9
				c-7.5-0.6-11.6,0.3-12.4,2.7C14.1,31.5,31.8,39.7,37.3,42c5.2,2.3,10.9,4.4,16.9,6.3c10.9,3.5,21.4,6,29.6,6.9
				c6,0.7,13.4,0.8,14.5-2.5c0.7-2.3-1.8-5.3-7.7-8.9c0.3-1.5,0.5-3,0.6-4.5c18.1,8.5,23.4,15.2,22.3,18.6c-1.9,5.9-27.4,7.4-61.6-3.7
				C46.1,52.6,40.6,50.4,35.4,48.1L35.4,48.1z"/>
			<path className="saturn-jagged__ring--main" d="M90.5,38.3c-0.5,2.1-0.8,3.2-1.4,5.2c5.5,3.4,9,6.8,8.3,8.8c-1.5,4.6-20.9,2.5-43.3-4.8S14.7,30.6,16.2,26
				c0.7-2.1,5.2-2.8,12-2.2c0.3-0.7,2.5-4.9,2.6-5C12,15.1,1.7,16.3,0.2,20.9c-2.2,6.8,18.1,23,51.2,33.7s60.2,10.1,62.4,3.3
				C115.2,53.4,107.6,46.3,90.5,38.3z M52.5,53.4c-27.6-8.8-46-21.8-49.3-29.6c8.3,8.4,26.4,19,50.7,26.6c24.9,7.8,46.6,9.6,58.3,7.3
				C106.4,62.9,81.8,62.9,52.5,53.4z"/>
			</svg>
		)
	}
}