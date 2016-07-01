import React, { Component, PropTypes } from 'react';
import { Map, List } from 'immutable';
import './index.scss';
import Info from './Info';
import { getColor } from '../../utils/ProjectHelpers';
import DeviceImage from '../DeviceImage';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  colorSets: PropTypes.instanceOf(List),
  children: PropTypes.node
};

class ProjectDashboard extends Component {
  projectDashboardStyles () {
    const color = getColor(
      this.props.project,
      this.props.colorSets,
      'background'
    );

    return {
      background: color
    };
  }

  render () {
    return (
      <div
        className='project-dashboard'
        style={this.projectDashboardStyles()}
      >
        <div className='project-dashboard__container'>
          <div className='project-dashboard__image'>
            <DeviceImage device='laptop' image={this.props.project.getIn(['attributes', 'featured_screenshot', 'image'])} />
          </div>
          <Info
            project={this.props.project}
            colorSets={this.props.colorSets}
          />
        </div>
      </div>
    );
  }
}

ProjectDashboard.propTypes = propTypes;

export default ProjectDashboard;
