import React from 'react';
import ReactDOM from 'react-dom';
import SideBarContainer from './index';
import {
  renderIntoDocument,
  Simulate
} from 'react-addons-test-utils';
import * as ActionCreators from '../../../actions/PortfolioActions';

describe('SideBarContainer', () => {
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

  describe('displayTitleLinks', () => {
    let setActiveProject;
    let sideBarShown;
    const isActiveProject = (currentProject, activeProject) => {
      return activeProject.get('id') === currentProject.get('id');
    };

    before(() => {
      setActiveProject = spy(ActionCreators, 'projectActive').withArgs(project);
      sideBarShown = spy(ActionCreators, 'sideBarShown');
    });

    beforeEach(() => {
      component = renderIntoDocument(
        <SideBarContainer
          projects={projects}
          activeProject={project}
          isActiveProject={isActiveProject}
          setActiveProject={ActionCreators.projectActive}
          sideBarShown={ActionCreators.sideBarShown}
          colorSets={new List([])}
        />
      );

      Simulate.click(ReactDOM.findDOMNode(component.refs.setActiveProject));
    });

    it('calls setActiveProject on clicking of link', () => {
      expect(setActiveProject.calledOnce).to.be.true;
    });

    it('calls sideBarContainerShown on clicking of link', () => {
      expect(sideBarShown.calledOnce).to.be.true;
    });

    afterEach(() => {
      setActiveProject.reset();
      sideBarShown.reset();
    });

    after(() => {
      sideBarShown.restore();
    });
  });

  describe('sideBarContainerProjectClassName', () => {
    let sideBarProjectClassName;
    let sideBarContainer;

    beforeEach(() => {
      sideBarContainer = new SideBarContainer();
      sideBarContainer.props = {
        isActiveProject: (currentProject, activeProject) => {
          return activeProject.get('id') === currentProject.get('id');
        },
        activeProject: project
      };

      sideBarProjectClassName = sideBarContainer.sideBarProjectClassName(projects.last());
    });

    it('returns active if true', () => {
      expect(sideBarProjectClassName).to.equal('side-bar__project side-bar__project--active');
    });
  });
});
