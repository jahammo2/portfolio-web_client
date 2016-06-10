import './index.scss';
import React, { Component, PropTypes } from 'react';
import { List, Map } from 'immutable';
import { getColor } from '../../../utils/ContainerHelpers';

const propTypes = {
  projects: PropTypes.instanceOf(List),
  activeProject: PropTypes.instanceOf(Map),
  setActiveProject: PropTypes.func,
  isActiveProject: PropTypes.func,
  sideBarShowing: PropTypes.bool,
  colorSets: PropTypes.instanceOf(List)
};

class SideBarBullets extends Component {
  constructor (props) {
    super(props);
  }

  sideBarBulletClassName (project) {
    return this.props.isActiveProject(project, this.props.activeProject) ?
      'side-bar__bullet side-bar__bullet--active' :
      'side-bar__bullet';
  }

  sideBarBulletStyles (project) {
    if (this.props.isActiveProject(project, this.props.activeProject)) {
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
      <ul className='side-bar__bullets column-center'>
        {this.displayBullets()}
      </ul>
    );
  }
}

SideBarBullets.propTypes = propTypes;

export default SideBarBullets;
