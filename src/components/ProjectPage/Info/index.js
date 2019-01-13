import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Images from './Images';
import './index.scss';
import { List, Map } from 'immutable';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  devices: PropTypes.instanceOf(List),
  screenshots: PropTypes.instanceOf(List),
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool
};

class Info extends Component {
  componentWillMount () {
    if (this.props.sideBarShowing) this.props.sideBarShown();
  }

  render () {
    return (
      <div className='project-page__info'>
        <p className='project-page__info__description'>{this.props.project.getIn(['attributes', 'description'])}</p>
        <div
          className='project-page__info__body'
          dangerouslySetInnerHTML={{__html: this.props.project.getIn(['attributes', 'opening_body'])}}
        />
        <Images
          project={this.props.project}
          devices={this.props.devices}
          screenshots={this.props.screenshots}
        />
        <div
          className='project-page__info__body'
          dangerouslySetInnerHTML={{__html: this.props.project.getIn(['attributes', 'closing_body'])}}
        />
      </div>
    );
  }
}

Info.propTypes = propTypes;

export default Info;
