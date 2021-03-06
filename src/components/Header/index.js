import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import MenuBar from '../../components/MenuBar';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.node,
  handleOpenSideBar: PropTypes.func,
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
          <Link
            className='header__name'
            onClick={this.props.handleOpenSideBar}
            to='/'
          >
            Jordan Hammond
          </Link>

          <div className='header__vertical-line mobile' />
          <MenuBar
            handleOpenSideBar={this.props.handleOpenSideBar}
            sideBarShown={this.props.sideBarShown}
            sideBarShowing={this.props.sideBarShowing}
            title={this.title()}
          />
        </div>
        <hr className='header__line line' />
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
