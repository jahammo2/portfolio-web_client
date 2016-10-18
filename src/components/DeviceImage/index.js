import React, { Component, PropTypes } from 'react';
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

  componentDidMount () {
    console.log('mounted');
    // this.setState({ showing: true });
  }

  componentWillMount () {
    console.log('will mount');
    // this.setState({ showing: true });
  }

  componentWillUnmount () {
    console.log('unmounted');
    // this.setState({ showing: false });
  }

  componentWillReceiveProps (props) {
    console.log('will receive');
    console.log(props);
    // this.setState({ showing: null });
    if (props.device !== this.state.showing) {
      setTimeout(() => {
        this.setState({ showing: props.device });
      }, 100);
    }
  }

  componentDidReceiveProps (props) {
    console.log(props);
    console.log('did receive');
  }

  shouldComponentUpdate () {
    console.log('here');
    return true;
  }

  chooseImage () {
    console.log("image");
    const device = this.props.device;

    if (this.state.showing === device) {
      if (device === 'desktop') {
        console.log("desktop");
        return laptop;
      } else if (device === 'mobile') {
        console.log("mobile");
        return mobile;
      }
    }
  }

  render () {
    return (
      <div className={`device-image device-image--${this.props.device}`}>
        <img
          className={`device-image__container device-image__container__${this.props.device}`}
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
