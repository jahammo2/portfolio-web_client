import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import menuButton from '../../img/menubutton.svg';
import xButton from '../../img/xbutton.svg';
import { Link } from 'react-router';

const propTypes = {
  handleOpenSideBar: PropTypes.func,
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool,
  icon: PropTypes.string,
  title: PropTypes.string
};

class MenuBar extends Component {
  constructor () {
    super();

    this.handleSideBar = this.handleSideBar.bind(this);
  }

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

  handleSideBar () {
    this.props.sideBarShown(!this.props.sideBarShowing);
  }

  render () {
    return (
      <div
        className='row-end menu-bar'
        ref='sideBarShown'
      >
        <Link
          className='menu-bar__about-me link desktop'
          onClick={this.props.handleOpenSideBar}
          to='/about-me'
        >
          about me
        </Link>
        <div className='header__vertical-line desktop' />
        <div
          onClick={this.handleSideBar}
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
