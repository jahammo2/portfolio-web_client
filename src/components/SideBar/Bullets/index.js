import './index.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import { getColor, getHighProjectAmountStyleOverrides } from '../../../utils/ProjectHelpers';

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
    this.state = { hover: null };
  }

  path () {
    return window.location.pathname;
  }

  bulletsClassName () {
    return this.path() === '/' ?
      'side-bar__bullets side-bar__bullets--on-homepage column-center' :
      'side-bar__bullets column-center';
  }

  bulletClassName (project) {
    return this.bulletIsToBeHighlighted(project) ?
      'side-bar__bullet side-bar__bullet--active' :
      'side-bar__bullet';
  }

  bulletIsToBeHighlighted (project) {
    return this.props.isActiveProject(project, this.props.activeProject) || this.state.hover === project;
  }

  bulletStyles (project) {
    if (this.bulletIsToBeHighlighted(project)) {
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

  handleMouseOver (project) {
    return this.setState({ hover: project });
  }

  displayBullets () {
    return this.props.projects.map((project, index) => {
      return (
        <li
          style={this.bulletStyles(project)}
          className={this.bulletClassName(project)}
          onMouseOver={() => {this.setState({ hover: project });}}
          onMouseOut={() => {this.setState({ hover: null });}}
          onClick={() => {this.props.setActiveProject(project);}}
          key={index + 5000}
        >
        </li>
      );
    });
  }

  render () {
    const listOverrides = getHighProjectAmountStyleOverrides(
      this.props.projects,
      {
        height: 'initial',
        justifyContent: 'flex-start'
      }
    );

    return (
      <ul
        className={this.bulletsClassName()}
        style={listOverrides}
      >
        {this.path() === '/' &&
          this.displayBullets()}
      </ul>
    );
  }
}

Bullets.propTypes = propTypes;

export default Bullets;
