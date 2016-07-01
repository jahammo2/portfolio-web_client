import React, { Component, PropTypes } from 'react';
import { getIncludedObjectTitles } from '../../../../utils/ProjectHelpers';
import './index.scss';
import { List, Map } from 'immutable';
import moment from 'moment';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  devices: PropTypes.instanceOf(List),
  languages: PropTypes.instanceOf(List)
};

class Technologies extends Component {
  conjureLineItem (title, index) {
    const key = `${title} ${index}`;

    return (
      <li
        key={key}
        className='project-page__side-panel__technologies__list__item'
      >
        {title}
      </li>
    );
  }

  displayTech (techProps, techName) {
    const techList = Array.from(new Set(getIncludedObjectTitles(
      this.props.project,
      techProps,
      techName
    )));

    return (
      <ul className='project-page__side-panel__technologies__list'>
        <p className='project-page__side-panel__technologies__list__title'>{techName}</p>
        {techList.map((tech, index) => {
          return this.conjureLineItem(tech, index);
        })}
      </ul>
    );
  }

  displayDeployedDate () {
    const date = moment(this.props.project.getIn(['attributes', 'date_deployed'])).format('MMM D, YYYY');

    return (
      <div className='project-page__side-panel__technologies__list'>
        <p className='project-page__side-panel__technologies__list__title'>Date deployed</p>
        <p className='project-page__side-panel__technologies__list__item'>{date}</p>
      </div>
    );
  }

  render () {
    return (
      <div className='project-page__side-panel__technologies column-start'>
        {this.displayTech(this.props.languages, 'languages')}
        {this.displayTech(this.props.devices, 'devices')}
        {this.displayDeployedDate()}
      </div>
    );
  }
}

Technologies.propTypes = propTypes;

export default Technologies;
