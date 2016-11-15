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
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool,
  children: PropTypes.node
};

export class ProjectDashboard extends Component {
  constructor (props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleSwipeAction = this.handleSwipeAction.bind(this);
    this.state = { wheelReady: true };
  }

  componentWillMount () {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('wheel', this.handleWheel);
    if (this.props.sideBarShowing) this.props.sideBarShown();
  }

  handleKeyDown (e) {
    if (e.key === 'ArrowDown') {
      this.swipe(1);
    } else if (e.key === 'ArrowUp') {
      this.swipe(-1);
    }
  }

  handleWheel (e) {
    if (this.wheelDirection(e.wheelDeltaY).up) {
      this.wheelToNext(1);
    } else if (this.wheelDirection(e.wheelDeltaY).down) {
      this.wheelToNext(-1);
    }
  }

  wheelDirection (wheelDeltaY) {
    return {
      up: this.state.wheelReady && wheelDeltaY < -100,
      down: this.state.wheelReady && wheelDeltaY > 100
    };
  }

  wheelToNext (direction) {
    this.setState({ wheelReady: false });
    this.swipe(direction);

    setTimeout(() => {
      this.setState({ wheelReady: true });
    }, 1000);
  }

  handleSwipeAction (e, x, y, isFlick, velocity) {
    if (velocity > 1 && y > 0) {
      this.swipe(1);
    } else if (velocity > 1 && y < 0) {
      this.swipe(-1);
    }
  }

  swipe (direction) {
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
          flickThreshold={40}
          delta={100}
          onSwiped={this.handleSwipeAction}
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
