import React, { Component } from 'react';
import '../styles/Contact.scss';
import {Superhero} from './svg/Superhero';

class Contact extends Component {
	render() {
		return (
			<section id="scrollTo--contact" className="section--contact">
				<div className="container--contact">
					<Superhero />
					<h2 className="section__header">How to reach me</h2>
					<a className="contact__email" href="mailto:sasha.bajzek@gmail.com">sasha.bajzek@gmail.com</a>
					<ul className="list--contacts">
						<li>
							<a className="contact" href="https://github.com/SashaBajzek">
								<img className="contact__image contact__image--github" src={"./GitHub-Mark-Light-64px.png"} alt="Github" />			
							</a>
						</li>
						<li>
							<a className="contact" href="https://www.linkedin.com/in/SashaBajzek">
								<img className="contact__image" src={"./In-White-54px-TM.png"} alt="LinkedIn" />
							</a>
						</li>
						<li>
							<a className="contact" href="https://www.facebook.com/sasha.bajzek">
								<img className="contact__image" src={"./FB-f-Logo__white_50.png"} alt="Facebook" />			
							</a>
						</li>
						<li>
							<a className="contact" href="mailto:sasha.bajzek@gmail.com">
								<img className="contact__image contact__image--email" src={"./email.svg"} alt="Email" />
							</a>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}

export default Contact;