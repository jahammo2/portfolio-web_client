import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Map } from 'immutable';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import * as actionCreators from '../../actions/PortfolioActions';
import './index.scss';

const propTypes = {
  children: PropTypes.node,
  projects: PropTypes.instanceOf(List),
  activeProject: PropTypes.instanceOf(Map),
  colorSets: PropTypes.instanceOf(List),
  setActiveProject: PropTypes.func,
  fetchProjects: PropTypes.func,
  projectActive: PropTypes.func,
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool,
  socialLinks: PropTypes.instanceOf(List),
  fetchSocialLinks: PropTypes.func
};

export class PortfolioRoot extends Component {
  constructor () {
    super();

    this.handleOpenSideBar = this.handleOpenSideBar.bind(this);
  }

  componentWillMount () {
    return this.props.fetchProjects();
  }

  portfolioRootContainerClassName () {
    if (this.props.sideBarShowing) {
      return 'portfolio-root__container portfolio-root__container--pushed';
    }

    return 'portfolio-root__container';
  }

  handleOpenSideBar () {
    if (this.props.sideBarShowing) this.props.sideBarShown(false);
  }

  render () {
    return (
      <div className='portfolio-root'>
        <Header
          handleOpenSideBar={this.handleOpenSideBar}
          sideBarShown={this.props.sideBarShown}
          sideBarShowing={this.props.sideBarShowing}
        />
        <SideBar
          projects={this.props.projects}
          activeProject={this.props.activeProject}
          setActiveProject={this.props.projectActive}
          sideBarShowing={this.props.sideBarShowing}
          sideBarShown={this.props.sideBarShown}
          colorSets={this.props.colorSets}
          socialLinks={this.props.socialLinks}
          fetchSocialLinks={this.props.fetchSocialLinks}
        />
        <div className={this.portfolioRootContainerClassName()}>
          {this.props.children &&
            cloneElement(this.props.children, {
              project: this.props.activeProject,
              colorSets: this.props.colorSets,
              projects: this.props.projects,
              setActiveProject: this.props.projectActive,
              sideBarShown: this.props.sideBarShown,
              sideBarShowing: this.props.sideBarShowing
            })
          }
        </div>
      </div>
    );
  }
}

PortfolioRoot.propTypes = propTypes;

function mapStateToProps (state) {
  return {
    projects: state.get('projects'),
    activeProject: state.get('activeProject'),
    sideBarShowing: state.get('sideBarShowing'),
    colorSets: state.get('colorSets'),
    socialLinks: state.get('socialLinks')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioRoot);
