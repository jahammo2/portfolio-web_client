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

  setActiveProject (project) {
    this.props.setActiveProject(project);
    return this.props.sideBarShown();
  }

  isActiveProject (project) {
    const activeProject = this.props.activeProject;

    if (activeProject.get('id') === project.get('id')) {
      return 'active';
    }

    return 'side-bar__project ';
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
        <li
          className='side-bar__project'
          key={project.get('id')}
        >
          <a
            className={this.isActiveProject(project)}
            onClick={() => {this.setActiveProject(project)}}
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
      <div className={this.isSideBarShowing()}>
        <ul className='side-bar__container'>
          {this.displayTitleLinks()}
        </ul>
      </div>
    );
  }
}

SideBar.propTypes = propTypes;

export default SideBar;
