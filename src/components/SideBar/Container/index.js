import './index.scss';
import React, { Component, PropTypes } from 'react';
import { List, Map } from 'immutable';
import { Link } from 'react-router';

const propTypes = {
  projects: PropTypes.instanceOf(List),
  activeProject: PropTypes.instanceOf(Map),
  setActiveProject: PropTypes.func,
  isActiveProject: PropTypes.func,
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool
};

class Container extends Component {
  constructor (props) {
    super(props);
  }

  sideBarProjectClassName (project) {
    return this.props.isActiveProject(project, this.props.activeProject) ?
      'side-bar__project side-bar__project--active' :
      'side-bar__project';
  }

  containerClassName () {
    return this.props.sideBarShowing ?
      'side-bar__container side-bar__container--showing' :
      'side-bar__container';
  }

  displayTitleLinks () {
    return this.props.projects.map((project) => {
      return (
        <li
          className={this.sideBarProjectClassName(project)}
          key={project.get('id')}
        >
          <Link
            onMouseOver={() => {this.props.setActiveProject(project);}}
            onClick={() => {
              this.props.setActiveProject(project);
              return this.props.sideBarShown();
            }}
            to={`/projects/${project.get('id')}`}
            ref='setActiveProject'
          >
            {project.get('attributes').get('title')}
          </Link>
        </li>
      );
    });
  }

  render () {
    return (
      <div className={this.containerClassName()}>
        <ul className='side-bar__container__list column-start'>
          {this.displayTitleLinks()}
        </ul>
      </div>
    );
  }
}

Container.propTypes = propTypes;

export default Container;
