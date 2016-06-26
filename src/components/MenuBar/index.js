import React, { Component, PropTypes } from 'react';
import './index.scss';
import menuButton from '../../img/menubutton.svg';
import xButton from '../../img/xbutton.svg';

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
        onClick={() => {this.props.sideBarShown();}}
        className='row-end menu-bar'
        ref='sideBarShown'
      >
        <p className='menu-bar__title'>{this.props.title}</p>
        {this.displayMenuIcon()}
      </div>
    );
  }
}

MenuBar.propTypes = propTypes;

export default MenuBar;
