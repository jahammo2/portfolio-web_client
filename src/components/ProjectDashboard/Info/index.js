import React, { Component, PropTypes } from 'react';
import './index.scss';
import { List, Map } from 'immutable';
import { getColor } from '../../../utils/ProjectHelpers';
import Button from '../../Button';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  colorSets: PropTypes.instanceOf(List),
  device: PropTypes.string
};

class Info extends Component {
  getColorForStyle (name) {
    return getColor(
      this.props.project,
      this.props.colorSets,
      name
    );
  }

  render () {
    return (
      <div
        className={`project-dashboard__project-info project-dashboard__project-info--${this.props.device} column-between`}
        style={{ color: this.getColorForStyle('text') || '#222' }}
      >
        <p className='project-dashboard__project-info__title'>{this.props.project.getIn(['attributes', 'title'])}</p>
        <p className='project-dashboard__project-info__description'>{this.props.project.getIn(['attributes', 'description'])}</p>
        <Button
          project={this.props.project}
          colorSets={this.props.colorSets}
          name='view project'
          url={`/projects/${this.props.project.get('id')}`}
        />
      </div>
    );
  }
}

Info.propTypes = propTypes;

export default Info;
