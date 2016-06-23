import React, { Component, PropTypes } from 'react';
import './index.scss';
import laptop from '../../img/laptop.png';

const propTypes = {
  imageName: PropTypes.string
};

class DeviceImage extends Component {
  render () {
    return (
      <div className='device-image'>
        <img
          className={`device-image__${this.props.imageName}`}
          src={laptop}
        />
        <div className={`device-image__${this.props.imageName}__overlay`} />
      </div>
    );
  }
}

DeviceImage.propTypes = propTypes;

export default DeviceImage;
