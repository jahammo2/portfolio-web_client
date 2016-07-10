import React, { Component, PropTypes } from 'react';
import './index.scss';
import { List, Map } from 'immutable';
import { getColor } from '../../utils/ProjectHelpers';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  logo: PropTypes.string,
  colorSets: PropTypes.instanceOf(List)
};

class Logo extends Component {
  styles () {
    const color = getColor(
      this.props.project,
      this.props.colorSets,
      'button'
    );

    return {
      background: color
    };
  }

  render () {
    return (
      <div
        className='logo column-between'
        style={this.styles()}
      >
        <img
          className='logo__image'
          src={this.props.logo}
        />
        <p className='logo__title'>{this.props.project.getIn(['attributes', 'title'])}</p>
      </div>
    );
  }
}

Logo.propTypes = propTypes;

export default Logo;
