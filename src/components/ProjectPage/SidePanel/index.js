import React, { Component, PropTypes } from 'react';
import './index.scss';
import { List, Map } from 'immutable';
import Technologies from './Technologies';

const propTypes = {
  project: PropTypes.instanceOf(Map),
  devices: PropTypes.instanceOf(List),
  languages: PropTypes.instanceOf(List)
};

class SidePanel extends Component {
  displaySiteLink () {
    const link = this.props.project.getIn(['attributes', 'web_page_url']);

    return (
      <a
        className='button row-center project-page__side-panel__link'
        href={link}
      >
        <p className='button__text'>visit site</p>
      </a>
    );
  }

  displayLines () {
    return (
      <div className='project-page__side-panel__lines column-between'>
        <hr className='project-page__side-panel__line' />
        <hr className='project-page__side-panel__line' />
      </div>
    );
  }

  render () {
    return (
      <div className='project-page__side-panel'>
        {this.displaySiteLink()}
        {this.displayLines()}
        <Technologies
          project={this.props.project}
          devices={this.props.devices}
          languages={this.props.languages}
        />
      </div>
    );
  }
}

SidePanel.propTypes = propTypes;

export default SidePanel;
