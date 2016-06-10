import './index.scss';
import React, { Component, PropTypes } from 'react';
import { List, Map } from 'immutable';
import SideBarContainer from './SideBarContainer';
import SideBarBullets from './SideBarBullets';

const propTypes = {
  projects: PropTypes.instanceOf(List),
  activeProject: PropTypes.instanceOf(Map),
  setActiveProject: PropTypes.func,
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool,
  colorSets: PropTypes.instanceOf(List)
};

class SideBar extends Component {
  constructor (props) {
    super(props);
  }

  isActiveProject (project, activeProject) {
    return activeProject.get('id') === project.get('id');
  }

  sideBarClassName () {
    return this.props.sideBarShowing ?
      'side-bar side-bar--showing row-between' :
      'side-bar row-between';
  }

  render () {
    return (
      <div className={this.sideBarClassName()}>
        <SideBarBullets
          projects={this.props.projects}
          activeProject={this.props.activeProject}
          setActiveProject={this.props.setActiveProject}
          isActiveProject={this.isActiveProject}
          sideBarShowing={this.props.sideBarShowing}
          colorSets={this.props.colorSets}
        />
        <SideBarContainer
          projects={this.props.projects}
          activeProject={this.props.activeProject}
          setActiveProject={this.props.setActiveProject}
          isActiveProject={this.isActiveProject}
          sideBarShown={this.props.sideBarShown}
          sideBarShowing={this.props.sideBarShowing}
        />
      </div>
    );
  }
}

SideBar.propTypes = propTypes;

export default SideBar;
