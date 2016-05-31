import React, { Component, PropTypes, cloneElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Map } from 'immutable';
import SideBar from '../SideBar';
import Header from '../Header';
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
  sideBarShowing: PropTypes.bool
};

export class PortfolioRoot extends Component {
  componentWillMount () {
    this.props.fetchProjects();
  }

  portfolioRootContainerClassName () {
    if (this.props.sideBarShowing) {
      return 'portfolio-root__container portfolio-root__container--pushed';
    }

    return 'portfolio-root__container';
  }

  render () {
    return (
      <div className='portfolio-root'>
        <Header
          sideBarShown={this.props.sideBarShown}
          sideBarShowing={this.props.sideBarShowing}
        />
        <SideBar
          projects={this.props.projects}
          activeProject={this.props.activeProject}
          setActiveProject={this.props.projectActive}
          sideBarShowing={this.props.sideBarShowing}
          sideBarShown={this.props.sideBarShown}
        />
        <div className={this.portfolioRootContainerClassName()}>
          {this.props.children &&
            cloneElement(this.props.children, {
              project: this.props.activeProject,
              colorSets: this.props.colorSets
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
    colorSets: state.get('colorSets')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioRoot);
