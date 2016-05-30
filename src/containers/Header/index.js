// Imports
import React, { Component, PropTypes } from 'react';
import './index.scss';

// PropTypes
const propTypes = {
  children: PropTypes.node
};

class Header extends Component {
  render () {
    return (
      <div className='header column-between'>
        <div className='header__container row-between'>
          <p className='header__name'>Jordan Hammond</p>
          <div
            onClick={() => {this.props.sideBarShown();}}
            className='row-between header__menu'
            ref='sideBarShown'
          >
            <p>menu</p>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
        <hr className='header__line' />
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
