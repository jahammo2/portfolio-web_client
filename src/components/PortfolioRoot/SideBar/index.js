// Imports
import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import faker from 'faker';

// PropTypes
const propTypes = {
  projects: PropTypes.instanceOf(List)
};

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    // console.log('meh');
    // this.setState({
    //   showList: false
    // });
  }

  getProjects() {
    return this.props.projects || [];
  }

  foo() {
    if (!this.props.projects) {
      return null;
    }

    return this.props.projects.map((project) => {
      return (
        <li key={project.id}>
          {project.attributes.title}
        </li>
      )
    });
  }

  render() {
    console.log('sidebar:', this.props.projects);
    return (
      <div className="">
        <div>
          {this.foo()}
        </div>
      </div>
    );
  }
}

SideBar.propTypes = propTypes;

export default SideBar;
