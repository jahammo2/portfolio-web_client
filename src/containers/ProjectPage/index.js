import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Map } from 'immutable';
import SidePanel from '../../components/ProjectPage/SidePanel';
import Info from '../../components/ProjectPage/Info';
import Logo from '../../components/Logo';
import Footer from '../../components/ProjectPage/Footer';
import * as actionCreators from '../../actions/PortfolioActions';
import './index.scss';

const propTypes = {
  params: PropTypes.object,
  projects: PropTypes.instanceOf(List),
  individualProject: PropTypes.instanceOf(Map),
  devices: PropTypes.instanceOf(List),
  languages: PropTypes.instanceOf(List),
  screenshots: PropTypes.instanceOf(List),
  nextProject: PropTypes.instanceOf(Map),
  previousProject: PropTypes.instanceOf(Map),
  fetchProjectById: PropTypes.func
};

export class ProjectPage extends Component {
  constructor () {
    super();
    this.state = { projectId: 0 };
  }

  componentWillMount () {
    return this.props.fetchProjectById(this.props.params.projectId);
  }

  componentDidUpdate () {
    if (this.state.projectId !== this.props.params.projectId) {
      // TODO: linter says not to set state in componentDidUpdate. I need to find a better solution.
      this.setState({projectId: this.props.params.projectId});
      return this.props.fetchProjectById(this.props.params.projectId);
    }
  }

  sisterProject (sisterIndex) {
    const projectIds = this.props.projects.map((project) => {
      return project.get('id');
    });
    const projectIndex = projectIds.indexOf(this.props.individualProject.get('id'));
    const newIndex = projectIndex + sisterIndex;

    if (newIndex > this.props.individualProject.size) {
      return this.props.projects.get(0);
    }

    return this.props.projects.get(newIndex);
  }

  displayHeaderImage () {
    return (
      <div
        className='project-page__header-image'
        style={{backgroundImage: `url(${this.props.individualProject.getIn(['attributes', 'header_image'])})`}}
      >
        <Logo
          project={this.props.individualProject}
          logo={this.props.individualProject.getIn(['attributes', 'logo'])}
          colorSets={this.props.colorSets}
        />
      </div>
    );
  }

  displayMobile () {
    return (
      <div className='project-page column-start'>
        {this.displayHeaderImage()}
        {this.renderInfo()}
        {this.renderSidePanel()}
        {this.renderFooter()}
      </div>
    );
  }

  displayDesktop () {
    return (
      <div className='project-page'>
        {this.displayHeaderImage()}
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
        project={this.props.individualProject}
        devices={this.props.devices}
        languages={this.props.languages}
      />
    );
  }

  renderFooter () {
    return (
      <Footer
        nextProject={this.sisterProject(-1)}
        previousProject={this.sisterProject(1)}
      />
    );
  }

  renderInfo () {
    return (
      <Info
        project={this.props.individualProject}
        devices={this.props.devices}
        screenshots={this.props.screenshots}
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
    individualProject: state.get('individualProject'),
    projects: state.get('projects'),
    devices: state.get('devices'),
    languages: state.get('languages'),
    colorSets: state.get('colorSets'),
    screenshots: state.get('screenshots')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
