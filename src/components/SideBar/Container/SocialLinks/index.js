import './index.scss';
import React, { Component, PropTypes } from 'react';
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
        return <i className='fa fa-github-square social-links__icon'></i>;
      case 'twitter':
        return <i className='fa fa-twitter-square social-links__icon'></i>;
      case 'linkedin':
        return <i className='fa fa-linkedin-square social-links__icon'></i>;
      case 'instagram':
        return <i className='fa fa-instagram social-links__icon'></i>;
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
      </div>
    );
  }
}

SocialLinks.propTypes = propTypes;

export default SocialLinks;
