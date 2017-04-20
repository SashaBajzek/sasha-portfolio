import React, { Component } from 'react';
import { Sunflower } from './svg/Sunflower';
import { Tulips } from './svg/Tulips';
import { Vine1 } from './svg/Vine1';
import { Vine2 } from './svg/Vine2';
import '../styles/Welcome.scss';

class Welcome extends Component {
	render() {
		return (
			<section className="section--welcome">
				<div className="container--welcome">
					<h2 className="section__header">Welcome to my portfolio!</h2>
					<img id="scrollTo--welcome" className="headshot" src="./Sasha.jpg" alt="My Headshot" />
					<p className="welcome--text">I love creating things and solving logic problems. I currently work as a structural engineer designing bridges.  I work on structural teams of 2-4 people to analyze the forces a structure will face, then decide how the structure will piece together, choosing the appropriate connects and sizes to ensure usability, durability, and efficiency.</p>
					<p className="welcome--text">While structural engineering has been rewarding, I am breaking into the world of software engineering as it has more opportunity to be creative and learn new things in the ever changing technological environment. I can apply my problem solving skills to creating web experiences that are engaging, user friendly, and coded efficiently under the hood.</p>
					<Vine1 className="cool"/>
					<Vine2 />
					<Tulips className="welcome__image--tulips-1" />
					<Tulips className="welcome__image--tulips-2" />
					<Tulips className="welcome__image--tulips-3" />
					<Sunflower className="welcome__image--sunflower-1" />
					<Sunflower className="welcome__image--sunflower-2" />
				</div>
			</section>
		);
	}
}

export default Welcome;