import React, { Component, PropTypes } from 'react';
import './index.scss';
import { List, Map } from 'immutable';
import { getColor } from '../../../utils/ProjectHelpers';
import { Link } from 'react-router';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  colorSets: PropTypes.instanceOf(List)
};

class Info extends Component {
  infoStyles () {
    const color = getColor(
      this.props.project,
      this.props.colorSets,
      'button'
    );

    return {
      background: color
    };
  }

  linkToProject () {
    const url = `/projects/${this.props.project.get('id')}`;

    return (
      <Link
        to={url}
        className='project-dashboard__project-info__view-project row-center button'
        style={this.infoStyles()}
      >
        <p className='button__text'>view project</p>
      </Link>
    );
  }

  render () {
    return (
      <div className='project-dashboard__project-info column-between'>
        <p className='project-dashboard__project-info__title'>{this.props.project.getIn(['attributes', 'title'])}</p>
        <p className='project-dashboard__project-info__description'>{this.props.project.getIn(['attributes', 'description'])}</p>
        {this.linkToProject()}
      </div>
    );
  }
}

Info.propTypes = propTypes;

export default Info;
