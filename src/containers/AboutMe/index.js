import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
import * as actionCreators from '../../actions/PortfolioActions';
import './index.scss';

const propTypes = {
  bio: PropTypes.instanceOf(Map),
  fetchBio: PropTypes.func
};

export class AboutMe extends Component {
  componentWillMount () {
    this.props.fetchBio();
  }

  render () {
    console.log(this.props.bio.getIn(['attributes', 'background_image']));
    return (
      <div
        className='about-me background-image'
        style={{backgroundImage: `url(${this.props.bio.getIn(['attributes', 'background_image'])})`}}
      >
        <div className='about-me__container'>
        foo
        </div>
      </div>
    );
  }
}

AboutMe.propTypes = propTypes;

function mapStateToProps (state) {
  return {
    bio: state.get('bio')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
