import React, { Component } from "react";
import "../styles/Skills.scss";

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
                    <img
                      className="skills__logo"
                      src="./react.svg"
                      alt="React Logo"
                    />
                  </a>
                </li>
                <li>
                  <a className="skill" href="http://redux.js.org/">
                    <p className="skills__name">Redux</p>
                    <img
                      className="skills__logo"
                      src="./redux.svg"
                      alt="Redux Logo"
                    />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://www.typescriptlang.org/">
                    <p className="skills__name">TypeScript</p>
                    <img
                      className="skills__logo"
                      src="./typescript.svg"
                      alt="TypeScript Logo"
                    />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://flow.org/">
                    <p className="skills__name">Flow</p>
                    <img
                      className="skills__logo"
                      src="./flow.svg"
                      alt="Flow Logo"
                    />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://angularjs.org/">
                    <p className="skills__name">Angular 1</p>
                    <img
                      className="skills__logo"
                      src="./angular.svg"
                      alt="Angular Logo"
                    />
                  </a>
                </li>
                <li>
                  <a className="skill" href="https://jquery.com/">
                    <p className="skills__name">JQuery</p>
                    <img
                      className="skills__logo"
                      src="./jquery.svg"
                      alt="JQuery Logo"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="skill"
                    href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                  >
                    <p className="skills__name">HTML5</p>
                    <img
                      className="skills__logo"
                      src="./HTML5_Badge.svg"
                      alt="HTML5 Logo"
                    />
                  </a>
                </li>
                <li>
                  <a className="skill" href="http://sass-lang.com/">
                    <p className="skills__name">Sass</p>
                    <img
                      className="skills__logo"
                      src="./sass.svg"
                      alt="Sass Logo"
                    />
                  </a>
                </li>
                <li>
                  <a className="skill" href="http://rubyonrails.org/">
                    <p className="skills__name">Rails</p>
                    <img
                      className="skills__logo"
                      src="./rails.svg"
                      alt="Rails Logo"
                    />
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h3 className="list__heading--skills-main">Hardware</h3>
              <ul className="list--skills-sub">
                <li>
                  <a
                    className="skill"
                    href="https://en.wikipedia.org/wiki/Sewing#Garment_construction"
                  >
                    <p className="skills__name">Sewing</p>
                    <img
                      className="skills__logo"
                      src="./sewing.svg"
                      alt="Sewing Thread"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="skill"
                    href="https://en.wikipedia.org/wiki/Gardening"
                  >
                    <p className="skills__name">Gardening</p>
                    <img
                      className="skills__logo"
                      src="./garden.svg"
                      alt="Gardening Gloves"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="skill"
                    href="https://www.britannica.com/art/violin"
                  >
                    <p className="skills__name">Violin</p>
                    <img
                      className="skills__logo"
                      src="./violin.svg"
                      alt="Violin"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="skill"
                    href="https://en.wikipedia.org/wiki/Natural_skin_care"
                  >
                    <p className="skills__name">DIY Skincare</p>
                    <img
                      className="skills__logo"
                      src="./DIY.svg"
                      alt="DIY Skincare Pestle"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="skill"
                    href="https://web.iit.edu/mediaroom/press-releases/2005/apr/25/tinley-park-high-school-student-wins-28th-international-high"
                  >
                    <p className="skills__name">Model Bridge Building</p>
                    <img
                      className="skills__logo"
                      src="./Bridge--Small.jpg"
                      alt="Bridge"
                    />
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h3 className="list__heading--skills-main">Practical</h3>
              <ul className="list--skills-sub">
                <li>
                  <a
                    className="skill"
                    href="https://en.wikipedia.org/wiki/Structural_engineering"
                  >
                    <p className="skills__name">Structural Engineering</p>
                    <img
                      className="skills__logo"
                      src="./bridge.svg"
                      alt="Bridge"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="skill"
                    href="https://www.fhwa.dot.gov/bridge/inspection/"
                  >
                    <p className="skills__name">Bridge Inspecting</p>
                    <img
                      className="skills__logo"
                      src="./magnifying_glass.svg"
                      alt="Magnifying Glass"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="skill"
                    href="https://en.wikipedia.org/wiki/Table_football"
                  >
                    <p className="skills__name">Foosball</p>
                    <img
                      className="skills__logo"
                      src="./foosball.svg"
                      alt="Foosball Table"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="skill"
                    href="https://firearmtraining.nra.org/become-an-instructor/"
                  >
                    <p className="skills__name">Pistol Instructor</p>
                    <img
                      className="skills__logo"
                      src="./target.svg"
                      alt="Target"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="skill"
                    href="https://en.wikipedia.org/wiki/Make-up_artist"
                  >
                    <p className="skills__name">Amatuer Makeup Artist</p>
                    <img
                      className="skills__logo"
                      src="./makeup.svg"
                      alt="Makeup Brush"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="skill"
                    href="https://en.wikipedia.org/wiki/Camping"
                  >
                    <p className="skills__name">Camping</p>
                    <img
                      className="skills__logo"
                      src="./camping.svg"
                      alt="Tent"
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
