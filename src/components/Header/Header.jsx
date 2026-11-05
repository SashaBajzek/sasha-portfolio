import React from 'react'
import {Link} from 'react-scroll'
import {focusHeading} from '../App/focusHeading'
import './Header.scss'

const Header = ({closeHamburger, menuStatus, offset, toggleHamburger}) => {
  const menuItems = [
    {tab: 'welcome', text: 'About Me'},
    {tab: 'skills', text: 'Skills'},
    {tab: 'work', text: 'Examples'},
    {tab: 'contact', text: 'Contact'},
  ]
  return (
    <header className={menuStatus}>
      <div className="container--header">
        <h1 id="heading--top" className="header__name" tabIndex={-1}>
          Sasha Bajzek
        </h1>
        <button onClick={toggleHamburger} className="header__hamburger" aria-expanded={menuStatus === 'menuOpen'}>
          <span className="visually-hidden">Menu Toggle</span>
        </button>
        <nav className="header__nav" aria-label="Main">
          <ul className="list--header-nav">
            {menuItems.map(item => (
              <li className="listItem--header-nav" key={item.tab}>
                <Link
                  className="listItem__text--header-nav"
                  duration={500}
                  href={`#scrollTo--${item.tab}`}
                  offset={offset}
                  onClick={() => {
                    closeHamburger()
                    focusHeading(`heading--${item.tab}`)
                  }}
                  smooth={true}
                  spy={true}
                  to={`scrollTo--${item.tab}`}
                >
                  <span className="listItem__underline--header-nav">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
