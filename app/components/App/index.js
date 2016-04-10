// Imports
import React, { Component, PropTypes } from 'react';

// PropTypes
const propTypes = {
  children: PropTypes.node
};

/*
  App
  <App/>
*/

class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
