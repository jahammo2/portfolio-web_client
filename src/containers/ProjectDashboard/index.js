// Imports
import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';
import './index.scss';
import laptop from '../../img/laptop.png';
import ProjectDashboardInfo from '../../components/ProjectDashboardInfo';

// PropTypes
const propTypes = {
  project: PropTypes.instanceOf(Map),
  children: PropTypes.node
};

class ProjectDashboard extends Component {
  getBackground () {
    const colorSetId = this.props.project.getIn(['relationships', 'color_set', 'data', 'id']);
    const colorSet = this.props.colorSets.find((entry) => {
      return entry.get('id') === colorSetId;
    });

    if (colorSet) {
      return colorSet.getIn(['attributes', 'background']);
    }

    return 'white';
  }

  displayDeviceImage () {
    return(
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
