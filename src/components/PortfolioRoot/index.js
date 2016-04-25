// Imports
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Map } from 'immutable';
import SideBar from './SideBar';
import * as actionCreators from '../../actions/PortfolioActions';

// PropTypes
const propTypes = {
  children: PropTypes.node
};

class PortfolioRoot extends Component {
  componentWillMount() {
    // console.log('2');
    this.props.fetchProjects();
  }

  render() {
    // console.log('$$$$$$$$$$$$$$$$');
    // console.log(this.props.projects);
    return (
      <div className='projects'>
        <SideBar projects={this.props.projects} />
      </div>
    );
  }
}

PortfolioRoot.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    projects: state.get('projects')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioRoot);

