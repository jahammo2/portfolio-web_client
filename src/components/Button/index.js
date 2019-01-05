import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import { getColor } from '../../utils/ProjectHelpers';
import { Link } from 'react-router';
import './index.scss';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  colorSets: PropTypes.instanceOf(List),
  name: PropTypes.string,
  target: PropTypes.string,
  url: PropTypes.string
};

export class Button extends Component {
  constructor () {
    super();
    this.state = { hover: false };
  }

  getColorForStyle (name) {
    return getColor(
      this.props.project,
      this.props.colorSets,
      name
    );
  }

  buttonStyles () {
    if (this.state.hover) {
      return {
        background: this.getColorForStyle('button_hover') || '#222'
      };
    }

    return {
      background: this.getColorForStyle('button')
    };
  }

  toggleHover () {
    this.setState({ hover: !this.state.hover });
  }

  render () {
    return (
      <Link
        to={this.props.url}
        className='project-dashboard__project-button__view-project row-center button'
        style={this.buttonStyles()}
        target={this.props.target || ''}
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}
      >
        <p
          className='button__text'
          style={{ color: this.getColorForStyle('button_text') || '#FFF' }}
        >{this.props.name}</p>
      </Link>
    );
  }
}

Button.propTypes = propTypes;

export default Button;
