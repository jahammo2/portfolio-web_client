import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import laptop from '../../img/laptop.png';
import mobile from '../../img/mobile.png';

const propTypes = {
  device: PropTypes.string,
  image: PropTypes.string
};

class DeviceImage extends Component {
  constructor () {
    super();
    this.state = { showing: null };
  }

  componentWillMount () {
    this.setState({ showing: this.props.device });
  }

  componentWillReceiveProps (props) {
    if (props.device !== this.state.showing) {
      // the timeout gives a little extra time for the laptop or mobile image to load in
      setTimeout(() => {
        this.setState({ showing: props.device });
      }, 75);
    }
  }

  chooseImage (device) {
    if (device === 'desktop') {
      return laptop;
    } else if (device === 'mobile') {
      return mobile;
    }

    return null;
  }

  render () {
    const device = this.props.device;

    if (this.state.showing === device) {
      return (
        <div className={`device-image device-image--${device}`}>
          <img
            className={`device-image__container device-image__container__${device}`}
            src={this.chooseImage(device)}
          />
          <div
            style={{backgroundImage: `url(${this.props.image})`}}
            className={`device-image__container__${device}__overlay background-image`}
          />
        </div>
      );
    }

    return <div />;
  }
}

DeviceImage.propTypes = propTypes;

export default DeviceImage;
