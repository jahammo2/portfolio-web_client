import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  resume: PropTypes.string,
  email: PropTypes.string,
  phone_number: PropTypes.string
};

class ContactLinks extends Component {
  displayLink (prop, icon, title) {
    if (prop) {
      return (
        <li className='contact-links__link'>
          <a
            className='row-start'
            href={prop}
          >
            <i className={`fa fa-${icon} contact-links__icon`}></i>
            <p className='contact-links__title'>{title}</p>
          </a>
        </li>
      );
    }

    return null;
  }

  render () {
    return (
      <ul className='contact-links'>
        {this.displayLink(
          `mailto:${this.props.email}`,
          'envelope',
          this.props.email
        )}
        {this.displayLink(
          `tel:${this.props.phone_number}`,
          'phone',
          this.props.phone_number
        )}
      </ul>
    );
  }
}

ContactLinks.propTypes = propTypes;

export default ContactLinks;
