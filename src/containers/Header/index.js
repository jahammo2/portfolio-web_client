// Imports
import React, { Component, PropTypes } from 'react';
import './index.scss';
import MenuBar from '../../components/MenuBar';

// PropTypes
const propTypes = {
  children: PropTypes.node,
  sideBarShown: PropTypes.func,
  sideBarShowing: PropTypes.bool
};

class Header extends Component {
  title () {
    if (window.innerWidth > 768) {
      return 'projects';
    }

    return 'menu';
  }

  iconClassName () {
    if (this.props.sideBarShowing) {
      return 'times';
    }

    return 'bars';
  }

  render () {
    return (
      <div className='header column-between'>
        <div className='header__container row-between'>
          <p className='header__name'>Jordan Hammond</p>
          <MenuBar
            sideBarShown={this.props.sideBarShown}
            icon={this.iconClassName()}
            title={this.title()}
          />
        </div>
        <hr className='header__line' />
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
