// Imports
import './index.scss';
import React, { Component, PropTypes } from 'react';
import { List, Map } from 'immutable';
import { getColor } from '../../utils/ContainerHelpers';

// PropTypes
const propTypes = {
  projects: PropTypes.instanceOf(List),
  activeProject: PropTypes.instanceOf(Map),
  setActiveProject: PropTypes.func,
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool,
  colorSets: PropTypes.instanceOf(List)
};

class SideBar extends Component {
  constructor (props) {
    super(props);
  }

  setActiveProject (project) {
    console.log('called');
    this.props.setActiveProject(project);
  }

  isActiveProject (project) {
    const activeProject = this.props.activeProject;

    return activeProject.get('id') === project.get('id');
  }

  sideBarProjectClassName (project) {
    if (this.isActiveProject(project)) {
      return 'side-bar__project side-bar__project--active';
    }

    return 'side-bar__project';
  }

  sideBarContainerClassName () {
    if (this.props.sideBarShowing) {
      return 'side-bar__container side-bar__container--showing column-center';
    }

    return 'side-bar__container column-center';
  }

  sideBarClassName () {
    if (this.props.sideBarShowing) {
      return 'side-bar side-bar--showing row-between';
    }

    return 'side-bar row-between';
  }

  sideBarBulletClassName (project) {
    if (this.isActiveProject(project)) {
      return 'side-bar__bullet side-bar__bullet--active';
    }

    return 'side-bar__bullet';
  }

  displayTitleLinks () {
    return this.props.projects.map((project) => {
      return (
        <li
          className='side-bar__project'
          key={project.get('id')}
        >
          <a
            className={this.sideBarProjectClassName(project)}
            onClick={() => {
              this.setActiveProject(project);
              return this.props.sideBarShown();
            }}
            ref='setActiveProject'
          >
            {project.get('attributes').get('title')}
          </a>
        </li>
      );
    });
  }

  sideBarBulletStyles (project) {
    if (this.isActiveProject(project)) {
      const color = getColor(
        project,
        this.props.colorSets,
        'button'
      );

      return {
        background: color,
        borderColor: color
      };
    }

    return {};
  }

  displayBullets () {
    return this.props.projects.map((project, index) => {
      return (
        <li
          style={this.sideBarBulletStyles(project)}
          className={this.sideBarBulletClassName(project)}
          onMouseOver={() => {this.setActiveProject(project);}}
          onClick={() => {this.setActiveProject(project);}}
          key={index + 5000}
        >
        </li>
      );
    });
  }

  render () {
    return (
      <div className={this.sideBarClassName()}>
        <ul className='side-bar__bullets column-center'>
          {this.displayBullets()}
        </ul>
        <ul className={this.sideBarContainerClassName()}>
          {this.displayTitleLinks()}
        </ul>
      </div>
    );
  }
}

SideBar.propTypes = propTypes;

export default SideBar;
