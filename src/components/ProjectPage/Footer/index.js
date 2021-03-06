import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Map } from 'immutable';
import { Link } from 'react-router';

const propTypes = {
  nextProject: PropTypes.instanceOf(Map),
  previousProject: PropTypes.instanceOf(Map)
};

class Footer extends Component {
  projects () {
    return window.innerWidth > 599 ?
      [this.props.nextProject, this.props.previousProject] :
      [this.props.nextProject];
  }

  displayLinksToProjects () {
    return this.projects().map((project) => {
      return project && (
        <div
          key={project.get('id')}
          className='project-page__footer__project project-page__footer__background-image background-image'
          style={{backgroundImage: `url(${project.getIn(['attributes', 'header_image'])})`}}
        >
          <Link
            className='project-page__footer__project__link'
            to={`/projects/${project.get('id')}`}
          >
            <div className='project-page__footer__project__link__container'>
              <p className='project-page__footer__project__link__title'>{project.getIn(['attributes', 'title'])}</p>
            </div>
          </Link>
        </div>
      );
    });
  }

  render () {
    return (
      <div className='project-page__footer row-between'>
        {this.displayLinksToProjects()}
      </div>
    );
  }
}

Footer.propTypes = propTypes;

export default Footer;
