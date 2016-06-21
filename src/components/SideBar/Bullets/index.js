import './index.scss';
import React, { Component, PropTypes } from 'react';
import { List, Map } from 'immutable';
import { getColor } from '../../../utils/ProjectHelpers';

const propTypes = {
  projects: PropTypes.instanceOf(List),
  activeProject: PropTypes.instanceOf(Map),
  setActiveProject: PropTypes.func,
  isActiveProject: PropTypes.func,
  sideBarShowing: PropTypes.bool,
  colorSets: PropTypes.instanceOf(List)
};

class Bullets extends Component {
  constructor (props) {
    super(props);
  }

  path () {
    return window.location.pathname;
  }

  bulletsClassName (project) {
    return this.path() === '/' ?
      'side-bar__bullets side-bar__bullets--on-homepage column-center' :
      'side-bar__bullets column-center'
  }

  bulletClassName (project) {
    return this.props.isActiveProject(project, this.props.activeProject) ?
      'side-bar__bullet side-bar__bullet--active' :
      'side-bar__bullet';
  }

  bulletStyles (project) {
    if (this.props.isActiveProject(project, this.props.activeProject)) {
      const color = getColor(
        project,
        this.props.colorSets,
        'circle'
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
          style={this.bulletStyles(project)}
          className={this.bulletClassName(project)}
          onMouseOver={() => {this.props.setActiveProject(project);}}
          onClick={() => {this.props.setActiveProject(project);}}
          key={index + 5000}
        >
        </li>
      );
    });
  }

  render () {
    return (
      <ul className={this.bulletsClassName()}>
        {this.path() === '/' &&
          this.displayBullets()}
      </ul>
    );
  }
}

Bullets.propTypes = propTypes;

export default Bullets;
