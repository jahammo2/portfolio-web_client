import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Map } from 'immutable';
import SidePanel from '../../components/ProjectPage/SidePanel';
import Info from '../../components/ProjectPage/Info';
import Footer from '../../components/ProjectPage/Footer';
import * as actionCreators from '../../actions/PortfolioActions';
import './index.scss';

const propTypes = {
  params: PropTypes.object,
  projects: PropTypes.instanceOf(List),
  project: PropTypes.instanceOf(Map),
  devices: PropTypes.instanceOf(List),
  languages: PropTypes.instanceOf(List),
  projectActive: PropTypes.func
};

export class ProjectPage extends Component {
  componentDidUpdate () {
    const currentProject = this.props.projects.find((project) => {
      return project.get('id') === this.props.params.projectId;
    });

    if (currentProject) {
      return this.props.projectActive(currentProject);
    }
  }

  sisterProject (sisterIndex) {
    const projectIndex = this.props.projects.indexOf(this.props.project);
    const newIndex = projectIndex + sisterIndex;

    if (newIndex > this.props.project.size) {
      return this.props.projects.get(0);
    }

    return this.props.projects.get(newIndex);
  }

  displayMobile () {
    return (
      <div className='project-page column-start'>
        <div className='project-page__header-image' />
        {this.renderInfo()}
        {this.renderSidePanel()}
        {this.renderFooter()}
      </div>
    );
  }

  displayDesktop () {
    return (
      <div className='project-page'>
        <div className='project-page__header-image' />
        <div className='project-page__container row-between'>
          {this.renderSidePanel()}
          {this.renderInfo()}
        </div>
        {this.renderFooter()}
      </div>
    );
  }

  renderSidePanel () {
    return (
      <SidePanel
        project={this.props.project}
        devices={this.props.devices}
        languages={this.props.languages}
      />
    );
  }

  renderFooter () {
    return (
      <Footer
        nextProject={this.sisterProject(1)}
        previousProject={this.sisterProject(-1)}
      />
    );
  }

  renderInfo () {
    return (
      <Info
        description={this.props.project.getIn(['attributes', 'description'])}
        openingBody={this.props.project.getIn(['attributes', 'opening_body'])}
        closingBody={this.props.project.getIn(['attributes', 'closing_body'])}
      />
    );
  }

  render () {
    return window.innerWidth > 599 ?
      this.displayDesktop() :
      this.displayMobile();
  }
}

ProjectPage.propTypes = propTypes;

function mapStateToProps (state) {
  return {
    projects: state.get('projects'),
    devices: state.get('devices'),
    languages: state.get('languages')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
