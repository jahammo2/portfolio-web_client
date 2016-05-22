// Imports
import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';

// PropTypes
const propTypes = {
  project: PropTypes.instanceOf(Map),
  children: PropTypes.node
};

class ProjectDashboard extends Component {
  project () {
    return this.props.project.getIn(['attributes', 'title']);
  }

  render () {
    return (
      <div className='project-dashboard'>
        {this.project()}
      </div>
    );
  }
}

ProjectDashboard.propTypes = propTypes;

export default ProjectDashboard;
