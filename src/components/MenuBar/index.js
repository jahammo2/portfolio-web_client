import React, { Component, PropTypes } from 'react';
import './index.scss';

// PropTypes
const propTypes = {
  sideBarShown: PropTypes.func,
  icon: PropTypes.string,
  title: PropTypes.string
};

class MenuBar extends Component {
  iconClassName () {
    return `fa fa-${this.props.icon}`;
  }

  render () {
    return (
      <div
        onClick={() => {this.props.sideBarShown();}}
        className='row-right menu-bar'
        ref='sideBarShown'
      >
        <p className='menu-bar__title'>{this.props.title}</p>
        <i className={this.iconClassName()} aria-hidden='true'></i>
      </div>
    );
  }
}

MenuBar.propTypes = propTypes;

export default MenuBar;
