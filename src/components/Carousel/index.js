import React, { Component, PropTypes } from 'react';
import './index.scss';
import Slider from 'react-slick';
import { List } from 'immutable';
import DeviceImage from '../DeviceImage';

const propTypes = {
  slickGoTo: PropTypes.number,
  devices: PropTypes.instanceOf(List),
  screenshots: PropTypes.instanceOf(List)
};

class Carousel extends Component {
  displaySlide (device, index) {
    return (
      <div
        className='carousel-slide'
        key={device.get('id')}
      >
        <div className='carousel-slide__image'>
          <DeviceImage
            device='laptop'
            image={this.props.screenshots.getIn([index, 'attributes', 'image'])}
          />
        </div>
        <p className='carousel-slide__caption'>{this.props.screenshots.getIn([index, 'attributes', 'caption'])}</p>
      </div>
    );
  }

  render () {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      slickGoTo: this.props.slickGoTo
    };
    return (
      <Slider {...settings}>
        {this.props.devices.map((device, index) => {
          return this.displaySlide(device, index);
        })}
      </Slider>
    );
  }
}

Carousel.propTypes = propTypes;

export default Carousel;
