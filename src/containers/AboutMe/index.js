import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
import * as actionCreators from '../../actions/PortfolioActions';
import ContactLinks from '../../components/AboutMe/ContactLinks';
import Info from '../../components/AboutMe/Info';
import './index.scss';

const propTypes = {
  bio: PropTypes.instanceOf(Map),
  fetchBio: PropTypes.func
};

export class AboutMe extends Component {
  componentWillMount () {
    this.props.fetchBio();
  }

  aboutMeStyles () {
    if (window.innerWidth > 599) {
      return { backgroundImage: `url(${this.props.bio.getIn(['attributes', 'background_image'])})` };
    }
  }

  render () {
    console.log(this.props.bio.getIn(['attributes', 'background_image']));
    return (
      <div
        className='about-me background-image'
        style={this.aboutMeStyles()}
      >
        <div className='about-me__container'>

          <div className='about-me__container__panel'>
            <div
              className='about-me__container__panel__image background-image'
              style={{backgroundImage: `url(${this.props.bio.getIn(['attributes', 'profile_picture'])})`}}
            />
            <hr className='about-me__container__panel__line line' />
            <ContactLinks
              resume={this.props.bio.getIn(['attributes', 'resume'])}
              email={this.props.bio.getIn(['attributes', 'email'])}
              phone_number={this.props.bio.getIn(['attributes', 'phone_number'])}
            />
            <hr className='about-me__container__panel__line about-me__container__panel__line--second line' />
          </div>
          <Info
            title={this.props.bio.getIn(['attributes', 'title'])}
            body={this.props.bio.getIn(['attributes', 'body'])}
          />
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
