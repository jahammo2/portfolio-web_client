import './index.scss';
import React, { Component, PropTypes } from 'react';
import { List, Map } from 'immutable';
import { Link } from 'react-router';
import SocialLinks from './SocialLinks';

const propTypes = {
  projects: PropTypes.instanceOf(List),
  activeProject: PropTypes.instanceOf(Map),
  setActiveProject: PropTypes.func,
  isActiveProject: PropTypes.func,
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool,
  socialLinks: PropTypes.instanceOf(List),
  fetchSocialLinks: PropTypes.func
};

class Container extends Component {
  constructor (props) {
    super(props);
  }

  sideBarProjectClassName (project) {
    return this.props.isActiveProject(project, this.props.activeProject) ?
      'side-bar__project side-bar__project--active' :
      'side-bar__project';
  }

  containerClassName () {
    return this.props.sideBarShowing ?
      'side-bar__container side-bar__container--showing column-start' :
      'side-bar__container column-start';
  }

  displayTitleLinks () {
    return this.props.projects.map((project) => {
      return (
        <li
          className={this.sideBarProjectClassName(project)}
          key={project.get('id')}
        >
          <Link
            onMouseOver={() => {this.props.setActiveProject(project);}}
            onClick={() => {
              this.props.setActiveProject(project);
              return this.props.sideBarShown();
            }}
            to={`/projects/${project.get('id')}`}
            ref='setActiveProject'
          >
            {project.get('attributes').get('title')}
          </Link>
        </li>
      );
    });
  }

  desktopStyles () {
    const totalProjectsHeight = this.props.projects.count() * 45;
    const extraMargin = window.innerHeight * 0.6 - totalProjectsHeight + 15;
    const topInPixels = `${totalProjectsHeight + extraMargin}px`;

    return {
      top: topInPixels
    };
  }

  displayAboutMeLink (device) {
    return (
      <Link
        to='/about-me'
        onClick={()=> {this.props.sideBarShown();}}
        className={`side-bar__about-me side-bar__about-me--${device}`}
      >
        about me
      </Link>
    );
  }

  displaySocialLinks (device) {
    return (
      <div
        className={`social-links ${device}`}
        style={device === 'desktop' ? this.desktopStyles() : {}}
      >
        <hr className='side-bar__container__line line' />
        {this.displayAboutMeLink(device)}
        <SocialLinks
          fetchSocialLinks={this.props.fetchSocialLinks}
          socialLinks={this.props.socialLinks}
        />
      </div>
    );
  }

  render () {
    return (
      <div className={this.containerClassName()}>
        <ul className='side-bar__container__list column-start'>
          {this.displayTitleLinks()}
          {this.displaySocialLinks('desktop')}
        </ul>
        {this.displaySocialLinks('mobile')}
      </div>
    );
  }
}

Container.propTypes = propTypes;

export default Container;
