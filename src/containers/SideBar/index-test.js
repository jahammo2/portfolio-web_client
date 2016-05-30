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

  describe('displayTitleLinks', () => {
    let setActiveProject;
    let sideBarShown;

    before(() => {
      setActiveProject = spy(ActionCreators, 'projectActive').withArgs(project);
      sideBarShown = spy(ActionCreators, 'sideBarShown');
    });

    beforeEach(() => {
      component = renderIntoDocument(
        <SideBar
          projects={projects}
          activeProject={project}
          setActiveProject={ActionCreators.projectActive}
          sideBarShown={ActionCreators.sideBarShown}
        />
      );

      Simulate.click(ReactDOM.findDOMNode(component.refs.setActiveProject));
    });

    it('calls setActiveProject on clicking of link', () => {
      expect(setActiveProject.calledOnce).to.be.true;
    });

    it('calls sideBarShown on clicking of link', () => {
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

  describe('isSideBarShowing', () => {
    let isSideBarShowing;
    let sideBar;

    beforeEach(() => {
      sideBar = new SideBar();
    });

    context('when the side bar is supposed to be showing', () => {
      beforeEach(() => {
        sideBar.props = {
          sideBarShowing: true
        };
        isSideBarShowing = sideBar.isSideBarShowing();
      });

      it('returns --showing', () => {
        expect(isSideBarShowing).to.equal('side-bar side-bar--showing');
      });
    });

    context('when the side bar is not supposed to be showing', () => {
      beforeEach(() => {
        sideBar.props = {
          sideBarShowing: false
        };
        isSideBarShowing = sideBar.isSideBarShowing();
      });

      it('does not return --showing', () => {
        expect(isSideBarShowing).to.equal('side-bar');
      });
    });
  });
});
