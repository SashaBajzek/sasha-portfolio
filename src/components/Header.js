import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.scss';

export default class Header extends Component {
	
	/* Need to add offset in mobile to account for the fixed header when using the scrollTo */
	
	constructor() {
    super();
    this.state = {
      width:  0
    }
  }
	
	offsetForScroll = width => {
		if (this.state.width <= 768) {
			return -40;
		} else {
			return 0;
		}
	}

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450 });
    } else {
      let update_width  = window.innerWidth;
      this.setState({ width: update_width });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
		const offset = this.offsetForScroll();
		
    return(
      <header className={this.props.menuStatus}>
				<div className="container--header">
					<h1 className="header__name">Sasha Bajzek</h1>
					<button role="button" onClick={this.props.toggleHamburger} className="header__hamburger" tabIndex="0"></button>
					<nav className="header__nav">
						<ul className="list--header-nav">
							<li className="listItem--header-nav" >
								<Link className="listItem__text--header-nav" to="scrollTo--welcome" spy={true} offset={offset} smooth={true} duration={500} onClick={this.props.closeHamburger} href="#scrollTo--welcome">
									<span className="listItem__underline--header-nav">About Me</span>
								</Link>
							</li>
							<li className="listItem--header-nav">
								<Link className="listItem__text--header-nav" to="scrollTo--skills" spy={true} offset={offset} smooth={true} duration={500} onClick={this.props.closeHamburger} href="#scrollTo--skills">
									<span className="listItem__underline--header-nav">Skills</span>
								</Link>
							</li>
							<li className="listItem--header-nav">
								<Link className="listItem__text--header-nav" to="scrollTo--work" spy={true} offset={offset} smooth={true} duration={500} onClick={this.props.closeHamburger} href="#scrollTo--work">
									<span className="listItem__underline--header-nav">Examples</span>
								</Link>
							</li>
							<li className="listItem--header-nav">
								<Link className="listItem__text--header-nav" to="scrollTo--contact" spy={true} offset={offset} smooth={true} duration={500} onClick={this.props.closeHamburger} href="#scrollTo--contact">
									<span className="listItem__underline--header-nav">Contact</span>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
    );
  }
}