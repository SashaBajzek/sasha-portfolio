import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../styles/Footer.scss';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container--footer">
					<nav>
						<ul className="list--footer-nav">
							<li className="listItem--footer-nav">
								<Link className="listItem__text--footer-nav listItem--backToTop" to="scrollTo--top" spy={true} smooth={true} duration={500}>

									<svg role="presentation" viewBox="0 0 33 50" className="footer__uparrow">
										<polygon className="arrow" points="16.5,1 1,23 32,23 " />
										<path className="arrow" d="M21.5,49h-10C10.1,49,9,47.9,9,46.5v-27c0-1.4,1.1-2.5,2.5-2.5h10c1.4,0,2.5,1.1,2.5,2.5v27
											C24,47.9,22.9,49,21.5,49z"/>
									</svg>

									<span className="listItem__underline--footer-nav">Back to Top</span>
								</Link>
							</li>
							<li className="listItem--footer-nav">
								<Link className="listItem__text--footer-nav" to="scrollTo--welcome" spy={true} smooth={true} duration={500}>
									<span className="listItem__underline--footer-nav">About Me</span>
								</Link>
							</li>
							<li className="listItem--footer-nav">
								<Link className="listItem__text--footer-nav" to="scrollTo--skills" spy={true} smooth={true} duration={500}>
									<span className="listItem__underline--footer-nav">Skills</span>
								</Link>
							</li>
							<li className="listItem--footer-nav">
								<Link className="listItem__text--footer-nav" to="scrollTo--work" spy={true} smooth={true} duration={500}>
									<span className="listItem__underline--footer-nav">Examples</span>
								</Link>
							</li>
							<li className="listItem--footer-nav">
								<Link className="listItem__text--footer-nav" to="scrollTo--contact" spy={true} smooth={true} duration={500}>
									<span className="listItem__underline--footer-nav">Contact</span>
								</Link>
							</li>
						</ul>
					</nav>
					<small className="footer__copyright">&copy; {this.props.year} Sasha Bajzek</small>
				</div>
			</footer>
		);
	}
}

export default Footer;