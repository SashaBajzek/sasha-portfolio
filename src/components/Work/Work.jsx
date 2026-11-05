import React, {Component} from 'react'
import resume from './SashaBajzekResume.pdf'
import ProjectBox from './ProjectBox'
import {Buildings} from './Buildings'
import {Mountain} from './Mountain'
import './Work.scss'
// Add cyop-react

class Work extends Component {
  render() {
    return (
      <section className="section--work">
        <div className="container--work">
          <h2 className="section__header">Examples of my work</h2>
          <a id="scrollTo--work" href={resume} download className="work__resume">
            <p className="work__resume-text">Resum&eacute; Click Here</p>
          </a>
          <ul className="list--projects">
            <ProjectBox
              project__name="FaceTimeWeb"
              project__heading="FaceTime for the Web"
              project__site="https://support.apple.com/en-us/109364"
              project__description="Lead UI engineer for FaceTime on the web, which lets Android and Windows users join FaceTime calls from their browser."
            />

            <ProjectBox
              project__name="GooglyEyes"
              project__heading="Googly Eyes"
              project__site="https://eyes.sashabajzek.com/"
              project__description="A web remake of Simone Giertz's googly eye shirt, with eyes that follow your cursor or finger."
            />

            <ProjectBox
              project__name="JS-808"
              project__heading="JS-808"
              project__site="https://js-808.sashabajzek.com/"
              project__description="A drum machine coded with React"
            />

            <ProjectBox
              project__name="Pacman"
              project__heading="WIP Birthday Pacman"
              project__site="http://isitjeffreysbday.info/"
              project__description="A WIP birthday pacman site made with React and TypeScript"
            />

            <ProjectBox
              project__name="Calgary"
              project__heading="Southwest Calgary Ring Road"
              project__site="http://www.swcrrproject.com/"
              project__description="Designed the box girders, deck, approach slabs, and wingwalls for Bridge 9, a 29m single span, integral abutment bridge."
            />

            <ProjectBox
              project__name="CP1"
              project__heading="California High Speed Rail"
              project__site="https://www.hsr.ca.gov/buildhsr/san_joaquin_river_viaduct.html"
              project__description="Designed the columns and piles for Fresno River Viaduct and the box girders for San Joaquin Viaduct."
            />

            <ProjectBox
              project__name="IL104"
              project__heading="IL104 Bridge at Meredosia"
              project__site="https://www.seaoi.org/sites/default/files/media/pdf/Bridge/seaoi_bridge_symposium_2016_patel.pdf"
              project__description="Designed the steel plate girders, steel details, joints, and bearings for nine of the 140 to 200ft long approach spans."
            />

            <ProjectBox
              project__name="HCB"
              project__heading="Research on Hybrid Composite Beams"
              project__site="https://vtechworks.lib.vt.edu/handle/10919/19298"
              project__description="Designed, constructed, and conducted testing on the deck reinforcement of Hybrid Composite Beam Bridges."
            />
          </ul>
          <Buildings />
          <Mountain />
        </div>
      </section>
    )
  }
}

export default Work
