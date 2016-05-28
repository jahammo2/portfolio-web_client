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

  isActiveProject (project) {
    const activeProject = this.props.activeProject;

    if (activeProject.get('id') === project.get('id')) {
      return 'active';
    }

    return 'link';
  }

  isSideBarShowing () {
    if (this.props.sideBarShowing) {
      return 'side-bar side-bar--showing';
    }

    return 'side-bar';
  }

  displayTitleLinks () {
    return this.props.projects.map((project) => {
      return (
        <li key={project.get('id')}>
          <a
            className={this.isActiveProject(project)}
            onClick={() => {this.props.setActiveProject(project);}}
            ref='setActiveProject'
          >
            {project.get('attributes').get('title')}
          </a>
        </li>
      );
    });
  }

  render () {
    return (
      <ul className={this.isSideBarShowing()}>
        {this.displayTitleLinks()}
      </ul>
    );
  }
}

SideBar.propTypes = propTypes;

export default SideBar;
