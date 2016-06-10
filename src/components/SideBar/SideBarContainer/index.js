import './index.scss';
import React, { Component, PropTypes } from 'react';
import { List, Map } from 'immutable';

const propTypes = {
  projects: PropTypes.instanceOf(List),
  activeProject: PropTypes.instanceOf(Map),
  setActiveProject: PropTypes.func,
  isActiveProject: PropTypes.func,
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool
};

class SideBarContainer extends Component {
  constructor (props) {
    super(props);
  }

  sideBarProjectClassName (project) {
    return this.props.isActiveProject(project, this.props.activeProject) ?
      'side-bar__project side-bar__project--active' :
      'side-bar__project';
  }

  sideBarContainerClassName () {
    return this.props.sideBarShowing ?
      'side-bar__container side-bar__container--showing column-center' :
      'side-bar__container column-center';
  }

  displayTitleLinks () {
    return this.props.projects.map((project) => {
      return (
        <li
          className='side-bar__project'
          key={project.get('id')}
        >
          <a
            onMouseOver={() => {this.props.setActiveProject(project);}}
            className={this.sideBarProjectClassName(project)}
            onClick={() => {
              this.props.setActiveProject(project);
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

  render () {
    return (
      <ul className={this.sideBarContainerClassName()}>
        {this.displayTitleLinks()}
      </ul>
    );
  }
}

SideBarContainer.propTypes = propTypes;

export default SideBarContainer;
