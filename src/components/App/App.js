import React from 'react'
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
  const [isDayTime, setIsDayTime] = React.useState(true)
  const [isOnEarth, setIsOnEarth] = React.useState(true)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  // set initial time
  React.useEffect(() => {
    const hour = new Date().getHours()
    setIsDayTime(hour >= 5 && hour < 17)
  }, [])

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
        menuStatus={isMenuOpen ? 'menuOpen' : 'menuClosed'}
        toggleHamburger={handleToggleMenu}
        closeHamburger={handleCloseMenu}
      />
      <Hero changeTimeOfDay={handleChangeTime} changePlanet={handleChangePlanet} />
      <Welcome />
      <Skills />
      <Work />
      <Contact />
      <Footer year={year} />
    </div>
  )
}

export default App
