import React, { Component, PropTypes } from 'react';
import { Map, List } from 'immutable';
import './index.scss';
import Info from './Info';
import { getColor, getSisterProject } from '../../utils/ProjectHelpers';
import DeviceImage from '../DeviceImage';
import Swipeable from 'react-swipeable';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  setActiveProject: PropTypes.func,
  projects: PropTypes.instanceOf(List),
  colorSets: PropTypes.instanceOf(List),
  children: PropTypes.node
};

export class ProjectDashboard extends Component {
  swipe (direction) {
    console.log(direction);
    const sisterProject = getSisterProject(direction, this.props.projects, this.props.project);
    this.props.setActiveProject(sisterProject);
  }

  projectDashboardStyles () {
    const color = getColor(
      this.props.project,
      this.props.colorSets,
      'background'
    );

    return {
      background: color
    };
  }

  render () {
    const device = this.props.project.getIn(['attributes', 'featured_screenshot', 'device']);

    return (
      <div
        className='project-dashboard'
        style={this.projectDashboardStyles()}
      >
        <Swipeable
          onSwipedUp={() => {this.swipe(1);}}
          onSwipedDown={() => {this.swipe(-1);}}
        >
          <div className='project-dashboard__container'>
            <div className={`project-dashboard__image project-dashboard__image--${device}`}>
              <DeviceImage
                device={device}
                image={this.props.project.getIn(['attributes', 'featured_screenshot', 'image'])}
              />
            </div>
            <Info
              device={device}
              project={this.props.project}
              colorSets={this.props.colorSets}
            />
          </div>
        </Swipeable>
      </div>
    );
  }
}

ProjectDashboard.propTypes = propTypes;

export default ProjectDashboard;
