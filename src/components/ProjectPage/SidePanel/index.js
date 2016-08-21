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
  displaySiteLink (site, buttonName) {
    const link = this.props.project.getIn(['attributes', site]);

    if (link) {
      return (
        <a
          className='button row-center project-page__side-panel__link'
          href={link}
          target='_blank'
        >
          <p className='button__text'>{buttonName}</p>
        </a>
      );
    }
  }

  displayLines () {
    return (
      <div className='project-page__side-panel__lines column-between'>
        <hr className='project-page__side-panel__line line' />
        <hr className='project-page__side-panel__line line' />
      </div>
    );
  }

  render () {
    return (
      <div className='project-page__side-panel'>
        {this.displaySiteLink('web_page_url', 'Visit site')}
        {this.displaySiteLink('github_page_url', 'GitHub page')}
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
