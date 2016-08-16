import React, { Component, PropTypes } from 'react';
import './index.scss';
import laptop from '../../img/laptop.png';
import mobile from '../../img/mobile.png';

const propTypes = {
  device: PropTypes.string,
  image: PropTypes.string
};

class DeviceImage extends Component {
  chooseImage () {
    const device = this.props.device;

    if (device === 'desktop') {
      return laptop;
    }

    return mobile;
  }

  render () {
    return (
      <div className={`device-image device-image--${this.props.device}`}>
        <img
          className={`device-image__${this.props.device}`}
          src={this.chooseImage()}
        />
        <div
          style={{backgroundImage: `url(${this.props.image})`}}
          className={`device-image__${this.props.device}__overlay background-image`}
        />
      </div>
    );
  }
}

DeviceImage.propTypes = propTypes;

export default DeviceImage;
