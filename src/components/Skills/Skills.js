import React, {Component} from 'react'
import './Skills.scss'
import reactLogo from './icons/react.svg'
import reduxLogo from './icons/redux.svg'
import tsLogo from './icons/typescript.svg'
import htmlLogo from './icons/HTML5_Badge.svg'
import sassLogo from './icons/sass.svg'
import sewing from './icons/sewing.svg'
import garden from './icons/garden.svg'
import violin from './icons/violin.svg'
import modelBridge from './icons/Bridge--Small.jpg'
import bridge from './icons/bridge.svg'
import inspect from './icons/magnifying_glass.svg'
import foosball from './icons/foosball.svg'
import target from './icons/target.svg'
import makeup from './icons/makeup.svg'
import camping from './icons/camping.svg'
// painting, accessiblity, jest, cypress

class Skills extends Component {
  render() {
    return (
      <section id="scrollTo--skills" className="section--skills">
        <div className="container--skills">
          <h2 className="section__header">My Skills</h2>
          <ul className="list--skills-main">
            <li>
              <h3 className="list__heading--skills-main">Software</h3>
              <ul className="list--skills-sub">
                <li>
                  <a className="skill" href="https://facebook.github.io/react/">
                    <p className="skills__name">React</p>
                    <img className="skills__logo" src={reactLogo} alt="React Logo" />
                  </a>
                </li>
                <li>
                  <a className="skill" href="http://redux.js.org/">
                    <p className="skills__name">Redux</p>
                    <img className="skills__logo" src={reduxLogo} alt="Redux Logo" />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://www.typescriptlang.org/">
                    <p className="skills__name">TypeScript</p>
                    <img className="skills__logo" src={tsLogo} alt="TypeScript Logo" />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
                    <p className="skills__name">HTML5</p>
                    <img className="skills__logo" src={htmlLogo} alt="HTML5 Logo" />
                  </a>
                </li>
                <li>
                  <a className="skill" href="http://sass-lang.com/">
                    <p className="skills__name">Sass</p>
                    <img className="skills__logo" src={sassLogo} alt="Sass Logo" />
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h3 className="list__heading--skills-main">Hardware</h3>
              <ul className="list--skills-sub">
                <li>
                  <a className="skill" href="https://en.wikipedia.org/wiki/Sewing#Garment_construction">
                    <p className="skills__name">Sewing</p>
                    <img className="skills__logo" src={sewing} alt="Sewing Thread" />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://en.wikipedia.org/wiki/Gardening">
                    <p className="skills__name">Gardening</p>
                    <img className="skills__logo" src={garden} alt="Gardening Gloves" />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://www.britannica.com/art/violin">
                    <p className="skills__name">Violin</p>
                    <img className="skills__logo" src={violin} alt="Violin" />
                  </a>
                </li>
                <li>
                  <a
                    className="skill"
                    href="https://web.iit.edu/mediaroom/press-releases/2005/apr/25/tinley-park-high-school-student-wins-28th-international-high"
                  >
                    <p className="skills__name">Model Bridge Building</p>
                    <img className="skills__logo" src={modelBridge} alt="Bridge" />
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h3 className="list__heading--skills-main">Practical</h3>
              <ul className="list--skills-sub">
                <li>
                  <a className="skill" href="https://en.wikipedia.org/wiki/Structural_engineering">
                    <p className="skills__name">Structural Engineering</p>
                    <img className="skills__logo" src={bridge} alt="Bridge" />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://www.fhwa.dot.gov/bridge/inspection/">
                    <p className="skills__name">Bridge Inspecting</p>
                    <img className="skills__logo" src={inspect} alt="Magnifying Glass" />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://en.wikipedia.org/wiki/Table_football">
                    <p className="skills__name">Foosball</p>
                    <img className="skills__logo" src={foosball} alt="Foosball Table" />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://firearmtraining.nra.org/become-an-instructor/">
                    <p className="skills__name">Pistol Instructor</p>
                    <img className="skills__logo" src={target} alt="Target" />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://en.wikipedia.org/wiki/Make-up_artist">
                    <p className="skills__name">Amatuer Makeup Artist</p>
                    <img className="skills__logo" src={makeup} alt="Makeup Brush" />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://en.wikipedia.org/wiki/Camping">
                    <p className="skills__name">Camping</p>
                    <img className="skills__logo" src={camping} alt="Tent" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Skills
