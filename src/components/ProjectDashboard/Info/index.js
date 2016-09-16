import React, { Component, PropTypes } from 'react';
import './index.scss';
import { List, Map } from 'immutable';
import { getColor } from '../../../utils/ProjectHelpers';
import { Link } from 'react-router';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  colorSets: PropTypes.instanceOf(List),
  device: PropTypes.string
};

export class Info extends Component {
  constructor () {
    super();
    this.state = { hover: false };
  }

  getColorForStyle (name) {
    return getColor(
      this.props.project,
      this.props.colorSets,
      name
    );
  }

  infoStyles () {
    if (this.state.hover) {
      return {
        background: this.getColorForStyle('button_hover') || "#222"
      };
    }

    return {
      background: this.getColorForStyle('button')
    };
  }

  toggleHover () {
    this.setState({ hover: !this.state.hover });
  }

  linkToProject () {
    const url = `/projects/${this.props.project.get('id')}`;

    return (
      <Link
        to={url}
        className='project-dashboard__project-info__view-project row-center button'
        style={this.infoStyles()}
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}
      >
        <p
          className='button__text'
          style={{ color: this.getColorForStyle('button_text') || "#FFF" }}
        >view project</p>
      </Link>
    );
  }

  render () {
    return (
      <div
        className={`project-dashboard__project-info project-dashboard__project-info--${this.props.device} column-between`}
        style={{ color: this.getColorForStyle('text') || "#222" }}
      >
        <p className='project-dashboard__project-info__title'>{this.props.project.getIn(['attributes', 'title'])}</p>
        <p className='project-dashboard__project-info__description'>{this.props.project.getIn(['attributes', 'description'])}</p>
        {this.linkToProject()}
      </div>
    );
  }
}

Info.propTypes = propTypes;

export default Info;
