import React, { Component, PropTypes } from 'react';
import './index.scss';
import Carousel from '../../../Carousel';
import { getIncludedObjects } from '../../../../utils/ProjectHelpers';
import { List, Map } from 'immutable';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  devices: PropTypes.instanceOf(List),
  screenshots: PropTypes.instanceOf(List)
};

class Images extends Component {
  constructor () {
    super();
    this.state = { slickGoTo: 0 };
  }

  displayThumbnails () {
    return (
      <ul className='project-page__info__images__thumbnails row-start'>
        {this.props.screenshots.map((screenshot, index) => {
          return (
            <li
              onClick={() => {
                this.setState({slickGoTo: index});}
              }
              key={screenshot.get('id')}
              className='project-page__info__images__thumbnails__thumbnail'
              style={{backgroundImage: `url(${screenshot.getIn(['attributes', 'image'])})`}}
            />
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
        />
        {this.displayThumbnails()}
      </div>
    );
  }
}

Images.propTypes = propTypes;

export default Images;
