import React, { Component } from 'react';
import { Sunflower } from './svg/Sunflower';
import { Tulips } from './svg/Tulips';
import { Vine1 } from './svg/Vine1';
import { Vine2 } from './svg/Vine2';
import { Alien } from './svg/Alien';
import '../styles/Welcome.scss';

class Welcome extends Component {
	render() {
		return (
			<section className="section--welcome">
				<div className="container--welcome">
					<h2 className="section__header">Welcome to my portfolio!</h2>
					<img id="scrollTo--welcome" className="headshot" src="./Sasha.jpg" alt="My Headshot" />
					<p className="welcome--text">My name is Sasha Bajzek and I love creating things and solving logic problems. I currently work as a structural engineer designing bridges for roads, rail, and sometimes pedestrians. I work on small structural teams of 2-4 people to analyze the forces a structure will face, decide how it will piece together, and select the appropriate interconnects and element sizes to ensure usability, durability, and efficiency.</p>
					<p className="welcome--text">While structural engineering has been rewarding, I am breaking into the world of front end web development as it has more opportunity to be creative and learn new things in the ever-changing world of web development. I am working to apply my problem-solving skills to create web experiences that are engaging, user friendly, and efficient to run as well as maintain.</p>
					<Vine1 className="cool"/>
					<Vine2 />
					<Tulips className="welcome__image--tulips-1" />
					<Tulips className="welcome__image--tulips-2" />
					<Tulips className="welcome__image--tulips-3" />
					<Sunflower className="welcome__image--sunflower-1" />
					<Sunflower className="welcome__image--sunflower-2" />
					<Alien className="alien welcome__image--alien-1" />
					<Alien className="alien welcome__image--alien-2" />
					<Alien className="alien welcome__image--alien-3" />
				</div>
			</section>
		);
	}
}

export default Welcome;