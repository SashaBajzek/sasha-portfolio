import React, { Component } from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Skills from './Skills';
import Welcome from './Welcome';
import Work from './Work';

class App extends Component {
	
	year = new Date().getFullYear();
	hour = new Date().getHours();
	
	getTimeOfDay = hour => {
		if(this.hour >= 5 && this.hour < 17) {
			return "day";
		} else {
			return "night";
		}
	}
	
	constructor(props) {
		super(props);
		this.state = {
			timeofday: this.getTimeOfDay(this.hour),
			planet: "earth",
			menuStatus: "menuClosed"
		}		
	}
	
	changeTimeOfDay = () => {
		if(this.state.timeofday === "day") {
			this.setState(prevState => ({
				timeofday: "night"
			}));
		} else {
			this.setState(prevState => ({
				timeofday: "day"
			}));
		}
	}
	
	changePlanet = () => {
		if(this.state.planet === "earth") {
			this.setState(prevState => ({
				planet: "space"
			}));
		} else {
			this.setState(prevState => ({
				planet: "earth"
			}));
		}
	}
	
	toggleHamburger = () => {
		if(this.state.menuStatus === "menuClosed") {
			this.setState(prevState => ({
				menuStatus: "menuOpen"
			}));
		} else {
			this.setState(prevState => ({
				menuStatus: "menuClosed"
			}));
		}
	}
	
	closeHamburger = () => {
		this.setState(prevState => ({
			menuStatus: "menuClosed"
		}));
	}

  render() {
    return (
      <div className={`App ${this.state.planet}--${this.state.timeofday}`}>
				<Header menuStatus={this.state.menuStatus} toggleHamburger={this.toggleHamburger} closeHamburger={this.closeHamburger} />
        <Hero changeTimeOfDay={this.changeTimeOfDay} changePlanet={this.changePlanet}/>
				<Welcome />
				<Skills />
				<Work />
				<Contact />
				<Footer year={this.year}/>
      </div>
    );
  }
}

export default App;