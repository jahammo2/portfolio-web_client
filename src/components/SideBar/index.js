import './index.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import Container from './Container';
import Bullets from './Bullets';

const propTypes = {
  projects: PropTypes.instanceOf(List),
  activeProject: PropTypes.instanceOf(Map),
  setActiveProject: PropTypes.func,
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool,
  colorSets: PropTypes.instanceOf(List),
  socialLinks: PropTypes.instanceOf(List),
  fetchSocialLinks: PropTypes.func
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
        <Bullets
          projects={this.props.projects}
          activeProject={this.props.activeProject}
          setActiveProject={this.props.setActiveProject}
          isActiveProject={this.isActiveProject}
          sideBarShowing={this.props.sideBarShowing}
          colorSets={this.props.colorSets}
        />
        <Container
          projects={this.props.projects}
          activeProject={this.props.activeProject}
          setActiveProject={this.props.setActiveProject}
          isActiveProject={this.isActiveProject}
          sideBarShown={this.props.sideBarShown}
          sideBarShowing={this.props.sideBarShowing}
          fetchSocialLinks={this.props.fetchSocialLinks}
          socialLinks={this.props.socialLinks}
        />
      </div>
    );
  }
}

SideBar.propTypes = propTypes;

export default SideBar;
