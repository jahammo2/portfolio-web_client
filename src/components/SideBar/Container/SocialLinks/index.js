import './index.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

const propTypes = {
  socialLinks: PropTypes.instanceOf(List),
  fetchSocialLinks: PropTypes.func
};

export class SocialLinks extends Component {
  componentWillMount () {
    return this.props.fetchSocialLinks();
  }

  pickIcon (site) {
    switch (site) {
      case 'github':
        return <i className='fab fa-github-square social-links__icon'></i>;
      case 'twitter':
        return <i className='fab fa-twitter-square social-links__icon'></i>;
      case 'linkedin':
        return <i className='fab fa-linkedin social-links__icon'></i>;
      case 'instagram':
        return <i className='fab fa-instagram social-links__icon'></i>;
      case 'dribbble':
        return <i className='fab fa-dribbble-square social-links__icon'></i>;
      case 'gitlab':
        return <i className='fab fa-gitlab social-links__icon'></i>;
      case 'medium':
        return <i className='fab fa-medium social-links__icon'></i>;
      default:
        return null;
    }
  }

  displaySocialLink (socialLink) {
    return (
      <a
        className='link'
        key={socialLink.get('id')}
        href={socialLink.getIn(['attributes', 'url'])}
        target='_blank'
      >
        {this.pickIcon(socialLink.getIn(['attributes', 'site']))}
      </a>
    );
  }

  render () {
    return (
      <div className='social-links__container row-start'>
        {this.props.socialLinks.map((socialLink) => {
          return this.displaySocialLink(socialLink);
        })}

        <a
          className='link'
          key='unimportant'
          href='https://medium.com/@jahammo2'
          target='_blank'
        >
          {this.pickIcon('medium')}
        </a>
      </div>
    );
  }
}

SocialLinks.propTypes = propTypes;

export default SocialLinks;
