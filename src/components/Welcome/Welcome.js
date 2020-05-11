import React, {Component} from 'react'
import {Sunflower} from './Sunflower'
import {SunflowerPetals} from './SunflowerPetals'
import {Tulips} from './Tulips'
import {Vine1} from './Vine1'
import {Vine2} from './Vine2'
import {Alien} from './Alien'
import './Welcome.scss'
import sasha from './Sasha.jpg'

class Welcome extends Component {
  render() {
    return (
      <section className="section--welcome">
        <div className="container--welcome">
          <h2 className="section__header">Welcome to my portfolio!</h2>
          <img id="scrollTo--welcome" className="headshot" src={sasha} alt="My Headshot" />
          <p className="welcome--text">
            My name is Sasha Bajzek, and I am a software engineer with a structural engineering background. I am a
            strong collaborator, a fast learner, great at working on both the big picture and small details, an
            accessibility advocate, and I love creating interactive user experiences.
          </p>
          <p className="welcome--text">I value collaboration, honesty, and inclusion.</p>
          <Vine1 className="cool" />
          <Vine2 />
          <Tulips className="welcome__image--tulips-1" />
          <Tulips className="welcome__image--tulips-2" />
          <Tulips className="welcome__image--tulips-3" />
          <Sunflower className="welcome__image--sunflower-1" />
          <SunflowerPetals className="welcome__image--sunflower-petals-1" />
          <Sunflower className="welcome__image--sunflower-2" />
          <SunflowerPetals className="welcome__image--sunflower-petals-2" />
          <Alien className="alien welcome__image--alien-1" />
          <Alien className="alien welcome__image--alien-2" />
          <Alien className="alien welcome__image--alien-3" />
        </div>
      </section>
    )
  }
}

export default Welcome
