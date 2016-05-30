import React, { Component, PropTypes } from 'react';
import './index.scss';

// PropTypes
const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

class ProjectDashboardInfo extends Component {
  render () {
    return (
      <div className='project-dashboard__project-info column-between'>
        <p className='project-dashboard__project-info__title'>{this.props.title}</p>
        <p className='project-dashboard__project-info__description'>{this.props.description}</p>
      </div>
    );
  }
}

ProjectDashboardInfo.propTypes = propTypes;

export default ProjectDashboardInfo;
