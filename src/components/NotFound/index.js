import React, { Component, PropTypes } from 'react';

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
