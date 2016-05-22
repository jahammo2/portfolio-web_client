// Imports
import './index.scss';
import React, { Component, PropTypes } from 'react';
import { List, Map } from 'immutable';

// PropTypes
const propTypes = {
  projects: PropTypes.instanceOf(List),
  activeProject: PropTypes.instanceOf(Map),
  setActiveProject: PropTypes.func
};

class SideBar extends Component {
  constructor (props) {
    super(props);
  }

  activateActiveProject (project) {
    this.props.setActiveProject(project);
  }

  isActiveProject (project) {
    const activeProject = this.props.activeProject;

    if (activeProject.get('id') === project.get('id')) {
      return 'active';
    }

    return 'link';
  }

  displayTitleLinks () {
    return this.props.projects.map((project) => {
      return (
        <li key={project.get('id')}>
          <a
            className={this.isActiveProject(project)}
            onClick={() => {this.activateActiveProject(project);}}
            ref='activateActiveProject'
          >
            {project.get('attributes').get('title')}
          </a>
        </li>
      );
    });
  }

  render () {
    return (
      <ul className='side-bar'>
        {this.displayTitleLinks()}
      </ul>
    );
  }
}

SideBar.propTypes = propTypes;

export default SideBar;
