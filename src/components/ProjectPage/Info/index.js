import React, { Component, PropTypes } from 'react';
import Images from './Images';
import './index.scss';
import { List, Map } from 'immutable';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  devices: PropTypes.instanceOf(List),
  screenshots: PropTypes.instanceOf(List)
};

class Info extends Component {
  render () {
    return (
      <div className='project-page__info'>
        <p className='project-page__info__description'>{this.props.project.getIn(['attributes', 'description'])}</p>
        <div>{this.props.project.getIn(['attributes', 'opening_body'])}</div>
        <Images
          project={this.props.project}
          devices={this.props.devices}
          screenshots={this.props.screenshots}
        />
        <div>{this.props.project.getIn(['attributes', 'closing_body'])}</div>
      </div>
    );
  }
}

Info.propTypes = propTypes;

export default Info;
