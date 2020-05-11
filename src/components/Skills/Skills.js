import React from 'react'
import {
  reactLogo,
  reduxLogo,
  tsLogo,
  htmlLogo,
  sassLogo,
  storybookLogo,
  jestLogo,
  cypressLogo,
  sewing,
  garden,
  violin,
  modelBridge,
  a11y,
  bridge,
  inspect,
  foosball,
  target,
  brush,
  camping,
} from './icons/index.js'
import './Skills.scss'

const Skills = () => {
  const softwareSkills = [
    {image: reactLogo, link: 'https://facebook.github.io/react/', text: 'React'},
    {image: reduxLogo, link: 'http://redux.js.org/', text: 'Redux'},
    {image: tsLogo, link: 'https://www.typescriptlang.org/', text: 'TypeScript'},
    {image: htmlLogo, link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', text: 'HTML5'},
    {image: sassLogo, link: 'http://sass-lang.com/', text: 'Sass'},
    {image: storybookLogo, link: 'https://storybook.js.org/', text: 'Storybook'},
    {image: jestLogo, link: 'https://jestjs.io/', text: 'Jest'},
    {image: cypressLogo, link: 'https://www.cypress.io/', text: 'Cypress'},
  ]
  const hardwareSkills = [
    {image: brush, link: 'https://www.bobross.com/', text: 'Oil Painting'},
    {image: garden, link: 'https://en.wikipedia.org/wiki/Gardening', text: 'Gardening'},
    {image: violin, link: 'https://www.britannica.com/art/violin', text: 'Violin'},
    {image: sewing, link: 'https://en.wikipedia.org/wiki/Sewing#Garment_construction', text: 'Sewing'},
    {
      image: modelBridge,
      link:
        'https://web.iit.edu/mediaroom/press-releases/2005/apr/25/tinley-park-high-school-student-wins-28th-international-high',
      text: 'Model Bridge Building',
    },
  ]
  const practicalSkills = [
    {image: a11y, link: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/', text: 'Accessibility'},
    {image: bridge, link: 'https://en.wikipedia.org/wiki/Structural_engineering', text: 'Structural Engineering'},
    {image: inspect, link: 'https://www.fhwa.dot.gov/bridge/inspection/', text: 'Bridge Inspecting'},
    {image: foosball, link: 'https://en.wikipedia.org/wiki/Table_football', text: 'Foosball'},
    {image: target, link: 'https://firearmtraining.nra.org/become-an-instructor/', text: 'Pistol Instructor'},
    {image: camping, link: 'https://en.wikipedia.org/wiki/Camping', text: 'Camping'},
  ]
  return (
    <section id="scrollTo--skills" className="section--skills">
      <div className="container--skills">
        <h2 className="section__header">My Skills</h2>
        <ul className="list--skills-main">
          <li>
            <h3 className="list__heading--skills-main">Software</h3>
            <ul className="list--skills-sub">
              {softwareSkills.map(item => (
                <li key={item.text}>
                  <a className="skill" href={item.link}>
                    <p className="skills__name">{item.text}</p>
                    <img className="skills__logo" src={item.image} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <h3 className="list__heading--skills-main">Hardware</h3>
            <ul className="list--skills-sub">
              {hardwareSkills.map(item => (
                <li key={item.text}>
                  <a className="skill" href={item.link}>
                    <p className="skills__name">{item.text}</p>
                    <img className="skills__logo" src={item.image} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <h3 className="list__heading--skills-main">Practical</h3>
            <ul className="list--skills-sub">
              {practicalSkills.map(item => (
                <li key={item.text}>
                  <a className="skill" href={item.link}>
                    <p className="skills__name">{item.text}</p>
                    <img className="skills__logo" src={item.image} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
