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
  const year = new Date().getFullYear()

  const screenWidth = useWindowWidth()
  const [offset, setOffset] = React.useState(0)

  const [isDayTime, setIsDayTime] = React.useState(true)
  const [isOnEarth, setIsOnEarth] = React.useState(true)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  // set initial time
  React.useEffect(() => {
    const hour = new Date().getHours()
    setIsDayTime(hour >= 5 && hour < 17)
  }, [])

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
    <div className={`App ${isOnEarth ? 'earth' : 'space'}--${isDayTime ? 'day' : 'night'}`}>
      <Header
        closeHamburger={handleCloseMenu}
        menuStatus={isMenuOpen ? 'menuOpen' : 'menuClosed'}
        offset={offset}
        toggleHamburger={handleToggleMenu}
      />
      <Hero changePlanet={handleChangePlanet} changeTimeOfDay={handleChangeTime} />
      <Welcome />
      <Skills />
      <Work />
      <Contact />
      <Footer offset={offset} year={year} />
    </div>
  )
}

export default App
