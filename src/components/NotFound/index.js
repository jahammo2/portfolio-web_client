import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node
};

class NotFound extends Component {
  render () {
    return (
      <div>
      </div>
    );
  }
}

NotFound.propTypes = propTypes;

export default NotFound;
