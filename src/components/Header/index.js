import React, { Component, PropTypes } from 'react';
import './index.scss';
import MenuBar from '../../components/MenuBar';
import { Link } from 'react-router';

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
          <Link to='/' className='header__name'>Jordan Hammond</Link>
          <MenuBar
            sideBarShown={this.props.sideBarShown}
            sideBarShowing={this.props.sideBarShowing}
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
