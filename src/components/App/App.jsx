import React from 'react'
import {useWindowWidth} from '@react-hook/window-size/throttled'

import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Skills from '../Skills/Skills'
import Welcome from '../Welcome/Welcome'
import Work from '../Work/Work'
import './App.scss'

const App = () => {
  // The prerendered HTML has the build year; update it in the browser in case the site wasn't rebuilt this year.
  const [year, setYear] = React.useState(() => new Date().getFullYear())
  React.useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const screenWidth = useWindowWidth()
  const [offset, setOffset] = React.useState(0)

  // The inline script in index.html sets the starting theme class on <html> before the first paint.
  const [isDayTime, setIsDayTime] = React.useState(
    () => typeof document === 'undefined' || !document.documentElement.className.endsWith('--night'),
  )
  const [isOnEarth, setIsOnEarth] = React.useState(true)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  // The theme class lives on <html> so the pre-paint script and React share one place.
  React.useEffect(() => {
    document.documentElement.className = `${isOnEarth ? 'earth' : 'space'}--${isDayTime ? 'day' : 'night'}`
  }, [isOnEarth, isDayTime])

  // Add offset in mobile to account for the fixed header when using the scrollTo
  React.useEffect(() => {
    screenWidth <= 768 ? setOffset(-40) : setOffset(0)
  }, [screenWidth])

  const handleChangePlanet = React.useCallback(() => {
    setIsOnEarth(!isOnEarth)
  }, [isOnEarth, setIsOnEarth])

  const handleChangeTime = React.useCallback(() => {
    setIsDayTime(!isDayTime)
  }, [isDayTime, setIsDayTime])

  const handleCloseMenu = React.useCallback(() => {
    setIsMenuOpen(false)
  }, [setIsMenuOpen])

  const handleToggleMenu = React.useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen, setIsMenuOpen])

  return (
    <div className="App">
      <Header
        closeHamburger={handleCloseMenu}
        menuStatus={isMenuOpen ? 'menuOpen' : 'menuClosed'}
        offset={offset}
        toggleHamburger={handleToggleMenu}
      />
      <main>
        <Hero changePlanet={handleChangePlanet} changeTimeOfDay={handleChangeTime} />
        <Welcome />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer offset={offset} year={year} />
    </div>
  )
}

export default App
