import React, { Component, PropTypes } from 'react';
import './index.scss';
import menuButton from '../../img/menubutton.svg';

// PropTypes
const propTypes = {
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool,
  icon: PropTypes.string,
  title: PropTypes.string
};

class MenuBar extends Component {
  displayMenuIcon () {
    return (
      <img className='menu-bar__hamburger' src={menuButton} />
    );
    // if (this.props.sideBarShowing) {
    //   return(
    //     <p className='menu-bar__x'>x</p>
    //   );
    // }
    //
    // return(
    //   <i className='fa fa-bars' aria-hidden='true'></i>
    // );
  }

  render () {
    return (
      <div
        onClick={() => {this.props.sideBarShown();}}
        className='row-right menu-bar'
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
