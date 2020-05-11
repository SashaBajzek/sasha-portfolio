import React from 'react'
import {useWindowWidth} from '@react-hook/window-size/throttled'
import {Link} from 'react-scroll'
import './Header.scss'

const Header = ({closeHamburger, menuStatus, toggleHamburger}) => {
  const screenWidth = useWindowWidth()
  const [offset, setOffset] = React.useState(0)

  // Add offset in mobile to account for the fixed header when using the scrollTo
  React.useEffect(() => {
    screenWidth <= 768 ? setOffset(-40) : setOffset(0)
  }, [screenWidth])

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
                  to={`scrollTo--${item.tab}`}
                  spy={true}
                  offset={offset}
                  smooth={true}
                  duration={500}
                  onClick={closeHamburger}
                  href={`#scrollTo--${item.tab}`}
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
