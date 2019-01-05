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
      slickGoTo: 0,
      slideIndex: 0
    };
  }

  setSlideIndex (index) {
    this.setState({ slideIndex: index });
  }

  setSlickGoTo (index) {
    this.setState({ slickGoTo: index });
  }

  thumbnailClassName (index) {
    if (index === this.state.slideIndex) {
      return 'thumbnail thumbnail--active background-image';
    }

    return 'thumbnail background-image';
  }

  displayThumbnails () {
    return (
      <ul className='project-page__info__images__thumbnails row-start'>
        {this.props.screenshots.map((screenshot, index) => {
          return (
            <li
              onClick={() => {
                this.setSlickGoTo(index);
              }}
              key={screenshot.get('id')}
              className={this.thumbnailClassName(index)}
              style={{backgroundImage: `url(${screenshot.getIn(['attributes', 'image'])})`}}
            >
              <div className='thumbnail__gray-overlay' />
            </li>
          );
        })}
      </ul>
    );
  }

  render () {
    return (
      <div className='project-page__info__images'>
        <Carousel
          slickGoTo={this.state.slickGoTo}
          devices={this.props.devices}
          screenshots={this.props.screenshots}
          setSlideIndex={this.setSlideIndex.bind(this)}
        />
        {this.displayThumbnails()}
      </div>
    );
  }
}

Images.propTypes = propTypes;

export default Images;
