import React from 'react'
import {
  reactLogo,
  tsLogo,
  htmlLogo,
  sassLogo,
  storybookLogo,
  pythonLogo,
  jsLogo,
  huggingFaceLogo,
  rosLogo,
  sewing,
  garden,
  violin,
  modelBridge,
  xlerobot,
  a11y,
  designSystems,
  bridge,
  inspect,
  foosball,
  target,
  brush,
} from './icons/index.js'
import './Skills.scss'

const SkillItem = ({image, link, text}) => {
  const content = (
    <>
      <p className="skills__name">{text}</p>
      <img className="skills__logo" src={image} alt="" width="30" height="30" />
    </>
  )
  return (
    <li>
      {link ? (
        <a className="skill" href={link}>
          {content}
        </a>
      ) : (
        <div className="skill">{content}</div>
      )}
    </li>
  )
}

const Skills = () => {
  const softwareSkills = [
    {image: rosLogo, link: 'https://www.ros.org/', text: 'ROS 2'},
    {image: pythonLogo, link: 'https://www.python.org/', text: 'Python'},
    {image: huggingFaceLogo, link: 'https://github.com/huggingface/lerobot', text: 'LeRobot'},
    {image: jsLogo, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', text: 'JavaScript'},
    {image: tsLogo, link: 'https://www.typescriptlang.org/', text: 'TypeScript'},
    {image: reactLogo, link: 'https://facebook.github.io/react/', text: 'React'},
    {image: htmlLogo, link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', text: 'HTML5'},
    {image: sassLogo, link: 'http://sass-lang.com/', text: 'Sass'},
    {image: storybookLogo, link: 'https://storybook.js.org/', text: 'Storybook'},
  ]
  const hardwareSkills = [
    {image: xlerobot, link: 'https://github.com/Vector-Wangel/XLeRobot', text: 'Robot Building'},
    {
      image: modelBridge,
      link: 'https://web.iit.edu/mediaroom/press-releases/2005/apr/25/tinley-park-high-school-student-wins-28th-international-high',
      text: 'Model Bridge Building',
    },
    {image: brush, link: 'https://www.bobross.com/', text: 'Oil Painting'},
    {image: garden, link: 'https://en.wikipedia.org/wiki/Gardening', text: 'Gardening'},
    {image: violin, link: 'https://www.britannica.com/art/violin', text: 'Violin'},
    {image: sewing, link: 'https://en.wikipedia.org/wiki/Sewing#Garment_construction', text: 'Sewing'},
  ]
  const practicalSkills = [
    {image: a11y, link: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/', text: 'Accessibility'},
    {image: designSystems, text: 'Design Systems'},
    {image: bridge, link: 'https://en.wikipedia.org/wiki/Structural_engineering', text: 'Structural Engineering'},
    {image: inspect, link: 'https://www.fhwa.dot.gov/bridge/inspection/', text: 'Bridge Inspecting'},
    {image: foosball, link: 'https://en.wikipedia.org/wiki/Table_football', text: 'Foosball'},
    {image: target, link: 'https://firearmtraining.nra.org/become-an-instructor/', text: 'Pistol Instructor'},
  ]
  return (
    <section id="scrollTo--skills" className="section--skills">
      <div className="container--skills">
        <h2 id="heading--skills" className="section__header" tabIndex={-1}>
          My Skills
        </h2>
        <ul className="list--skills-main">
          <li>
            <h3 className="list__heading--skills-main">Software</h3>
            <ul className="list--skills-sub">
              {softwareSkills.map(item => (
                <SkillItem key={item.text} {...item} />
              ))}
            </ul>
          </li>

          <li>
            <h3 className="list__heading--skills-main">Hardware</h3>
            <ul className="list--skills-sub">
              {hardwareSkills.map(item => (
                <SkillItem key={item.text} {...item} />
              ))}
            </ul>
          </li>

          <li>
            <h3 className="list__heading--skills-main">Practical</h3>
            <ul className="list--skills-sub">
              {practicalSkills.map(item => (
                <SkillItem key={item.text} {...item} />
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
