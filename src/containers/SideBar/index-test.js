import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './index';
import {
  renderIntoDocument,
  Simulate
} from 'react-addons-test-utils';
import * as ActionCreators from '../../actions/PortfolioActions';

describe('SideBar', () => {
  let component;
  const projects = new List([
    new Map({
      id: faker.random.number(),
      attributes: new Map({
        title: faker.random.word(),
        github_page_url: faker.internet.url(),
        web_page_url: faker.internet.url(),
        body: faker.lorem.sentences(),
        description: faker.lorem.sentence(),
        date_deployed: '2016-03-13 20:45:16'
      })
    }),
    new Map({
      id: faker.random.number(),
      attributes: new Map({
        title: faker.random.word(),
        github_page_url: faker.internet.url(),
        web_page_url: faker.internet.url(),
        body: faker.lorem.sentences(),
        description: faker.lorem.sentence(),
        date_deployed: '2016-03-13 20:45:16'
      })
    })
  ]);
  const project = projects.last();

  describe('activateActiveProject', () => {
    let setActiveProject;

    before(() => {
      setActiveProject = spy(ActionCreators, 'projectActive').withArgs(project);
    });

    beforeEach(() => {
      component = renderIntoDocument(
        <SideBar
          projects={projects}
          activeProject={project}
          setActiveProject={ActionCreators.projectActive}
        />
      );

      Simulate.click(ReactDOM.findDOMNode(component.refs.activateActiveProject));
    });

    it('calls setActiveProject', () => {
      expect(setActiveProject.calledOnce).to.be.true;
    });

    afterEach(() => {
      setActiveProject.reset();
    });
  });

  describe('isActiveProject', () => {
    let isActiveProject;
    let sideBar;

    beforeEach(() => {
      sideBar = new SideBar();
      sideBar.props = {
        activeProject: project
      };
      isActiveProject = sideBar.isActiveProject(projects.last());
    });

    it('returns active if the project is active', () => {
      expect(isActiveProject).to.equal('active');
    });
  });
});
