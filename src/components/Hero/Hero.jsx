import React from 'react'
import {Earth, EarthMinimal, Jupiter, Moon, Rocket, RocketAlien, Saturn, Sun} from './svgs/index.js'
import './Hero.scss'

const Hero = ({changePlanet, changeTimeOfDay}) => {
  const [isTakingOff, setIsTakingOff] = React.useState(false)
  const [isSpinning, setIsSpinning] = React.useState(false)

  const takeoffAnimation = () => {
    setIsTakingOff(true)

    setTimeout(() => {
      changePlanet()
    }, 4000)

    setTimeout(() => {
      setIsTakingOff(false)
    }, 4000)
  }

  const earthspinAnimation = () => {
    setIsSpinning(true)

    setTimeout(() => {
      setIsSpinning(false)
    }, 5000)
  }

  return (
    <div id="scrollTo--top" className="section--hero">
      <div className="container--hero">
        <p className="hero__text">Hello World!</p>
        <p className="hero__text">I'm Sasha!</p>

        <Earth earthspinAnimation={earthspinAnimation} earthspin={isSpinning ? 'earthspin' : ''} />

        <Saturn earthspinAnimation={earthspinAnimation} earthspin={isSpinning ? 'earthspin' : ''} />

        <Moon changeTimeOfDay={changeTimeOfDay} />

        <Sun changeTimeOfDay={changeTimeOfDay} />

        <EarthMinimal changeTimeOfDay={changeTimeOfDay} />

        <Jupiter changeTimeOfDay={changeTimeOfDay} />

        <Rocket takeoffAnimation={takeoffAnimation} takeoff={isTakingOff ? 'takeoff' : ''} />

        <RocketAlien takeoffAnimation={takeoffAnimation} takeoff={isTakingOff ? 'takeoff' : ''} />
      </div>
    </div>
  )
}

export default Hero
