import React, {Component} from 'react'
import './Contact.scss'
import {Superhero} from './Superhero'
import GitHubLogo from './GitHub-Mark-Light-64px.png'
import LinkedInLogo from './In-White-54px-TM.png'
import FacebookLogo from './FB-f-Logo__white_50.png'
import emailLogo from './email.svg'

class Contact extends Component {
  render() {
    return (
      <section id="scrollTo--contact" className="section--contact">
        <div className="container--contact">
          <Superhero />
          <h2 className="section__header">How to reach me</h2>
          <a className="contact__email" href="mailto:sasha.bajzek@gmail.com">
            sasha.bajzek@gmail.com
          </a>
          <ul className="list--contacts">
            <li>
              <a className="contact" href="https://github.com/SashaBajzek">
                <img className="contact__image contact__image--github" src={GitHubLogo} alt="Github" />
              </a>
            </li>
            <li>
              <a className="contact" href="https://www.linkedin.com/in/SashaBajzek">
                <img className="contact__image" src={LinkedInLogo} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a className="contact" href="https://www.facebook.com/sasha.bajzek">
                <img className="contact__image" src={FacebookLogo} alt="Facebook" />
              </a>
            </li>
            <li>
              <a className="contact" href="mailto:sasha.bajzek@gmail.com">
                <img className="contact__image contact__image--email" src={emailLogo} alt="Email" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Contact
