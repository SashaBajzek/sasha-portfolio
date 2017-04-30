import React, { Component } from 'react';
import ProjectBox from './ProjectBox';
import { Buildings } from './svg/Buildings';
import { Mountain } from './svg/Mountain';
import '../styles/Work.scss';

class Work extends Component {
	render() {
		return (
			<section className="section--work">
				<div className="container--work">
					<h2 className="section__header">Examples of my work</h2>
					<a id="scrollTo--work" href="./SashaBajzekResume.pdf" download className="work__resume"><p className="work__resume-text">Resum&eacute; Click Here</p></a>
					<ul className="list--projects">
						<ProjectBox project__name="Twitter" project__heading="Beach Twitter" project__site="https://beach-twitter.sashabajzek.com" project__description="A beachy version of a Twitter front end using React, Redux, Reselect, and Normalizr to optimize efficiency."/>

						<ProjectBox project__name="Haiku" project__heading="Haiku For You" project__site="https://haiku.sashabajzek.com/" project__description="A React and Redux front end combined with a Rails API backend to create a site for poetry enthusiasts."/>

						<ProjectBox project__name="Spectrum" project__heading="Spectrum Technology Group" project__site="https://sashabajzek.github.io/SpectrumTechnologyGroup/" project__description="A professional, mobile friendly website using React.  Utilizes BEM syntax to keep CSS clear."/>

						<ProjectBox project__name="Calgary" project__heading="Southwest Calgary Ring Road" project__site="http://www.swcrrproject.com/" project__description="Designed the box girders, deck, approach slabs, and wingwalls for Bridge 9, a 29m single span, integral abutment bridge."/>

						<ProjectBox project__name="CP1" project__heading="California High Speed Rail" project__site="https://www.hsr.ca.gov/buildhsr/san_joaquin_river_viaduct.html" project__description="Designed the columns and piles for Fresno River Viaduct and the box girders for San Joaquin Viaduct."/>

						<ProjectBox project__name="IL104" project__heading="IL104 Bridge at Meredosia" project__site="https://www.seaoi.org/sites/default/files/media/pdf/Bridge/seaoi_bridge_symposium_2016_patel.pdf" project__description="Designed the steel plate girders, steel details, joints, and bearings for nine of the 140 to 200ft long approach spans."/>

						<ProjectBox project__name="HCB" project__heading="Research on Hybrid Composite Beams" project__site="https://vtechworks.lib.vt.edu/handle/10919/19298" project__description="Designed, constructed, and conducted testing on the deck reinforcement of Hybrid Composite Beam Bridges."/>
					</ul>
					<Buildings />
					<Mountain />
				</div>
			</section>
		)
	}
}

export default Work;