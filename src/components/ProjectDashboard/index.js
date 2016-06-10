import React, { Component, PropTypes } from 'react';
import { Map, List } from 'immutable';
import './index.scss';
import laptop from '../../img/laptop.png';
import ProjectDashboardInfo from '../../components/ProjectDashboardInfo';
import { getColor } from '../../utils/ContainerHelpers';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  colorSets: PropTypes.instanceOf(List),
  children: PropTypes.node
};

class ProjectDashboard extends Component {
  getBackground () {
    return getColor(
      this.props.project,
      this.props.colorSets,
      'background'
    );
  }

  displayDeviceImage () {
    return (
      <div className='project-dashboard__image'>
        <img className='project-dashboard__laptop' src={laptop} />
        <div className='project-dashboard__laptop__overlay' />
      </div>
    );
  }

  render () {
    return (
      <div
        className='project-dashboard'
        style={{background: this.getBackground()}}
      >
        <div className='project-dashboard__container'>
          {this.displayDeviceImage()}
          <ProjectDashboardInfo
            title={this.props.project.getIn(['attributes', 'title'])}
            description={this.props.project.getIn(['attributes', 'description'])}
          />
        </div>
      </div>
    );
  }
}

ProjectDashboard.propTypes = propTypes;

export default ProjectDashboard;
