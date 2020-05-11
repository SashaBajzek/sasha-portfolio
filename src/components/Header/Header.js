import React from 'react'
import {Link} from 'react-scroll'
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
        <h1 className="header__name">Sasha Bajzek</h1>
        <button onClick={toggleHamburger} className="header__hamburger" tabIndex="0"></button>
        <nav className="header__nav">
          <ul className="list--header-nav">
            {menuItems.map(item => (
              <li className="listItem--header-nav" key={item.tab}>
                <Link
                  className="listItem__text--header-nav"
                  duration={500}
                  href={`#scrollTo--${item.tab}`}
                  offset={offset}
                  onClick={closeHamburger}
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
