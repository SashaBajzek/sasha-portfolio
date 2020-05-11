import React from 'react'
import {Link} from 'react-scroll'
import './Footer.scss'

const Footer = ({offset, year}) => {
  const menuItems = [
    {tab: 'welcome', text: 'About Me'},
    {tab: 'skills', text: 'Skills'},
    {tab: 'work', text: 'Examples'},
    {tab: 'contact', text: 'Contact'},
  ]

  return (
    <footer>
      <div className="container--footer">
        <nav>
          <ul className="list--footer-nav">
            <li className="listItem--footer-nav">
              <Link
                className="listItem__text--footer-nav listItem--backToTop"
                to="scrollTo--top"
                spy={true}
                offset={-70}
                smooth={true}
                duration={500}
                href="#making-focusable"
              >
                <svg role="presentation" viewBox="0 0 33 50" className="footer__uparrow">
                  <polygon className="arrow" points="16.5,1 1,23 32,23 " />
                  <path
                    className="arrow"
                    d="M21.5,49h-10C10.1,49,9,47.9,9,46.5v-27c0-1.4,1.1-2.5,2.5-2.5h10c1.4,0,2.5,1.1,2.5,2.5v27
											C24,47.9,22.9,49,21.5,49z"
                  />
                </svg>

                <span className="listItem__underline--footer-nav">Back to Top</span>
              </Link>
            </li>
            {menuItems.map(item => (
              <li className="listItem--footer-nav" key={item.tab}>
                <Link
                  className="listItem__text--footer-nav"
                  duration={500}
                  href="#making-focusable"
                  offset={offset}
                  smooth={true}
                  spy={true}
                  to={`scrollTo--${item.tab}`}
                >
                  <span className="listItem__underline--footer-nav">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <small className="footer__copyright">&copy; {year} Sasha Bajzek</small>
      </div>
    </footer>
  )
}

export default Footer
