import React, {Component} from 'react'

class ProjectBox extends Component {
  render() {
    const site = this.props.project__site
    const TextWrapper = site ? 'a' : 'div'
    return (
      <li className={`project project--${this.props.project__name}`}>
        <div className={`project__image project__image--${this.props.project__name}`}>
          {/* Without a link, tabIndex keeps the box focusable so keyboard users can reveal the overlay */}
          <TextWrapper href={site} tabIndex={site ? undefined : 0} className="project__text">
            <h3 className="project__heading">{this.props.project__heading}</h3>
            <p className="project__description">{this.props.project__description}</p>
            {site && <p className="project__click">Click for More</p>}
          </TextWrapper>
        </div>
      </li>
    )
  }
}

export default ProjectBox
