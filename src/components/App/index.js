import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node
};

class App extends Component {
  render () {
    return (
      <div className='app'>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
