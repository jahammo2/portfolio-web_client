import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import menuButton from '../../img/menubutton.svg';
import xButton from '../../img/xbutton.svg';
import { Link } from 'react-router';

const propTypes = {
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool,
  icon: PropTypes.string,
  title: PropTypes.string
};

class MenuBar extends Component {
  displayMenuIcon () {
    if (this.props.sideBarShowing) {
      return (
        <img className='menu-bar__icon' src={xButton} />
      );
    }

    return (
      <img className='menu-bar__icon' src={menuButton} />
    );
  }

  render () {
    return (
      <div
        className='row-end menu-bar'
        ref='sideBarShown'
      >
        <Link
          to='/about-me'
          className='menu-bar__about-me link desktop'
        >
          about me
        </Link>
        <div className='header__vertical-line desktop' />
        <div
          onClick={() => {this.props.sideBarShown();}}
          className='menu-bar__projects-toggler link row-between'
        >
          <p className='menu-bar__title'>{this.props.title}</p>
          {this.displayMenuIcon()}
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = propTypes;

export default MenuBar;
