import React from 'react'

import {Superhero} from './Superhero/Superhero'
import GitHubLogo from './images/GitHub-Mark-Light-64px.png'
import LinkedInLogo from './images/In-White-54px-TM.png'
import FacebookLogo from './images/FB-f-Logo__white_50.png'
import emailLogo from './images/email.svg'

import './Contact.scss'

const Contact = () => {
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
              <img className="contact__image contact__image--github" src={GitHubLogo} alt="" />
              <span class="visually-hidden">Sasha's Github Account</span>
            </a>
          </li>
          <li>
            <a className="contact" href="https://www.linkedin.com/in/SashaBajzek">
              <img className="contact__image" src={LinkedInLogo} alt="" />
              <span class="visually-hidden">Sasha's LinkedIn Profile</span>
            </a>
          </li>
          <li>
            <a className="contact" href="https://www.facebook.com/sasha.bajzek">
              <img className="contact__image" src={FacebookLogo} alt="" />
              <span class="visually-hidden">Sasha's Facebook Page</span>
            </a>
          </li>
          <li>
            <a className="contact" href="mailto:sasha.bajzek@gmail.com">
              <img className="contact__image contact__image--email" src={emailLogo} alt="" />
              <span class="visually-hidden">Email Sasha</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
