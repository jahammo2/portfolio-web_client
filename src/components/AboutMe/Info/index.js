import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

class Info extends Component {
  render () {
    return (
      <div className='about-me__info-container'>
        <div className='about-me__info'>
          <p className='about-me__info__title'>{this.props.title}</p>
          <p
            className='about-me__info__body'
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
        </div>
      </div>
    );
  }
}

Info.propTypes = propTypes;

export default Info;
