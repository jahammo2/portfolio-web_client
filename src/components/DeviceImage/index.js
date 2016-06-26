import React, { Component, PropTypes } from 'react';
import './index.scss';
import laptop from '../../img/laptop.png';

const propTypes = {
  device: PropTypes.string,
  image: PropTypes.string
};

class DeviceImage extends Component {
  render () {
    return (
      <div className='device-image'>
        <img
          className={`device-image__${this.props.device}`}
          src={laptop}
        />
        <div
          style={{backgroundImage: `url(${this.props.image})`}}
          className={`device-image__${this.props.device}__overlay`}
        />
      </div>
    );
  }
}

DeviceImage.propTypes = propTypes;

export default DeviceImage;
