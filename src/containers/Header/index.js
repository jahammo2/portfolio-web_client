// Imports
import React, { Component, PropTypes } from 'react';

// PropTypes
const propTypes = {
  children: PropTypes.node
};

class Header extends Component {
  render () {
    return (
      <header className='row-between'>
        <p>Jordan Hammond</p>
        <div
          onClick={() => {this.props.sideBarShown();}}
          ref='sideBarShown'
        >
          Hamburger
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
