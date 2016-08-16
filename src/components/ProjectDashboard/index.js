import React, { Component, PropTypes } from 'react';
import { Map, List } from 'immutable';
import './index.scss';
import Info from './Info';
import { getColor, getSisterProject } from '../../utils/ProjectHelpers';
import DeviceImage from '../DeviceImage';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  setActiveProject: PropTypes.func,
  projects: PropTypes.instanceOf(List),
  colorSets: PropTypes.instanceOf(List),
  children: PropTypes.node
};

export class ProjectDashboard extends Component {
  constructor () {
    super();
    this.state = { currentlyChanging: false };
  }

  scrollThroughProjects (e) {
    // Scrolling up
    if (e.deltaY === -18 && this.state.currentlyChanging === false) {
      const sisterProject = getSisterProject(1, this.props.projects, this.props.project);
      this.setState({currentlyChanging: true});
      this.props.setActiveProject(sisterProject);
    // Scrolling down
    } else if (e.deltaY === 18 && this.state.currentlyChanging === false) {
      const sisterProject = getSisterProject(-1, this.props.projects, this.props.project);
      this.setState({currentlyChanging: true});
      this.props.setActiveProject(sisterProject);
    // Scrolling nowhere
    } else if (e.deltaY === -0) {
      this.setState({currentlyChanging: false});
    }
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
        onWheel={(e) => {this.scrollThroughProjects(e);}}
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
      </div>
    );
  }
}

ProjectDashboard.propTypes = propTypes;

export default ProjectDashboard;
