import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.scss';

class Header extends Component {
	render() {
		return (
			<header id="scrollTo--top" className={this.props.menuStatus}>
				<div className="container--header">
					<h1 className="header__name">Sasha Bajzek</h1>
					<button onClick={this.props.toggleHamburger} className="header__hamburger"></button>
					<nav className="header__nav">
						<ul className="list--header-nav">
							<li className="listItem--header-nav">
								<Link className="listItem__text--header-nav" to="scrollTo--welcome" spy={true} smooth={true} duration={500} onClick={this.props.closeHamburger}>
									<span className="listItem__underline--header-nav">About Me</span>
								</Link>
							</li>
							<li className="listItem--header-nav">
								<Link className="listItem__text--header-nav" to="scrollTo--skills" spy={true} smooth={true} duration={500} onClick={this.props.closeHamburger}>
									<span className="listItem__underline--header-nav">Skills</span>
								</Link>
							</li>
							<li className="listItem--header-nav">
								<Link className="listItem__text--header-nav" to="scrollTo--work" spy={true} smooth={true} duration={500} onClick={this.props.closeHamburger}>
									<span className="listItem__underline--header-nav">Examples</span>
								</Link>
							</li>
							<li className="listItem--header-nav">
								<Link className="listItem__text--header-nav" to="scrollTo--contact" spy={true} smooth={true} duration={500} onClick={this.props.closeHamburger}>
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

export default Header;