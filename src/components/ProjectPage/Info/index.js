import React, { Component, PropTypes } from 'react';
import Carousel from '../../Carousel';
import './index.scss';

const propTypes = {
  description: PropTypes.string,
  openingBody: PropTypes.string,
  closingBody: PropTypes.string
};

class Info extends Component {
  render () {
    return (
      <div className='project-page__info'>
        <p className='project-page__info__description'>{this.props.description}</p>
        <div>{this.props.openingBody}</div>
        <div className='project-page__info__carousel'>
          <Carousel />
        </div>
        <div>{this.props.closingBody}</div>
      </div>
    );
  }
}

Info.propTypes = propTypes;

export default Info;
