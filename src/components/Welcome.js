import React, { Component } from 'react';
import { Sunflower } from './svg/Sunflower';
import { SunflowerPetals } from './svg/SunflowerPetals';
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
					<p className="welcome--text">My name is Sasha Bajzek and I am a front-end web developer with a structural engineering background who loves building great websites, creatively solving problems, and learning new skills every day.</p>
					<p className="welcome--text">My favorite libraries to work with at the moment are React and Redux, and I get excited about making websites accessible, performant, and engaging.</p>
					<Vine1 className="cool"/>
					<Vine2 />
					<Tulips className="welcome__image--tulips-1" />
					<Tulips className="welcome__image--tulips-2" />
					<Tulips className="welcome__image--tulips-3" />
					<Sunflower className="welcome__image--sunflower-1" />
					<SunflowerPetals className="welcome__image--sunflower-petals-1" />
					<Sunflower className="welcome__image--sunflower-2" />
					<SunflowerPetals className="welcome__image--sunflower-petals-2" />
					<Alien className="alien welcome__image--alien-1" />
					<Alien className="alien welcome__image--alien-2" />
					<Alien className="alien welcome__image--alien-3" />
				</div>
			</section>
		);
	}
}

export default Welcome;