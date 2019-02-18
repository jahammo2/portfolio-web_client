import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Carousel from '../../../Carousel';
import { List, Map } from 'immutable';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  devices: PropTypes.instanceOf(List),
  screenshots: PropTypes.instanceOf(List)
};

export class Images extends Component {
  constructor () {
    super();

    this.state = {
      slideIndex: 0
    };
    this.setSlideIndex = this.setSlideIndex.bind(this);
  }

  setSlideIndex (index) {
    this.setState({ slideIndex: index });
  }

  render () {
    return (
      <div className='project-page__info__images'>
        <Carousel
          slickGoTo={this.state.slideIndex}
          devices={this.props.devices}
          screenshots={this.props.screenshots}
          setSlideIndex={this.setSlideIndex}
        />
      </div>
    );
  }
}

Images.propTypes = propTypes;

export default Images;
