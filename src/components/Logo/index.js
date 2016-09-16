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
  getColorForStyle (name) {
    const color = getColor(
      this.props.project,
      this.props.colorSets,
      name
    );

    return color;
  }

  render () {
    return (
      <div
        className='logo column-between'
        style={{ background: this.getColorForStyle('logo_background') }}
      >
        <img
          className='logo__image'
          src={this.props.logo}
        />
        <p
          className='logo__title'
          style={{ color: this.getColorForStyle('logo_title') }}
        >{this.props.project.getIn(['attributes', 'title'])}</p>
      </div>
    );
  }
}

Logo.propTypes = propTypes;

export default Logo;
