import React, { Component, PropTypes, cloneElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Map } from 'immutable';
import SideBar from '../SideBar';
import Header from '../Header';
import * as actionCreators from '../../actions/PortfolioActions';

const propTypes = {
  children: PropTypes.node,
  projects: PropTypes.instanceOf(List),
  activeProject: PropTypes.instanceOf(Map),
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

  klass () {
    return 'foo';
  }

  render () {
    return (
      <div className={this.klass}>
        <Header
          sideBarShown={this.props.sideBarShown}
        />
        <SideBar
          projects={this.props.projects}
          activeProject={this.props.activeProject}
          setActiveProject={this.props.projectActive}
          sideBarShowing={this.props.sideBarShowing}
        />
        {this.props.children &&
          cloneElement(this.props.children, {
            project: this.props.activeProject
          })
        }
      </div>
    );
  }
}

PortfolioRoot.propTypes = propTypes;

function mapStateToProps (state) {
  return {
    projects: state.get('projects'),
    activeProject: state.get('activeProject'),
    sideBarShowing: state.get('sideBarShowing')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioRoot);
