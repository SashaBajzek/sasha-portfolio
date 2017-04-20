import React, { Component } from 'react';


class ProjectBox extends Component {
  render() {
    return (
      <li className={`project project--${this.props.project__name}`}>
				<a href={this.props.project__site} className="project__link">
					<div className={`project__image project__image--${this.props.project__name}`}></div>
					<div className="project__text">
						<h4 className="project__heading">{this.props.project__heading}</h4>
						<p className="project__description">{this.props.project__description}</p>
						<p className="project__click">Click for More</p>
					</div>
				</a>
			</li>
		);
	}
}

export default ProjectBox;