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
          colorSets={new List([])}
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
      expect(isActiveProject).to.be.true;
    });
  });

  describe('sideBarClassName', () => {
    let sideBarClassName;
    let sideBar;

    beforeEach(() => {
      sideBar = new SideBar();
    });

    context('when the side bar is supposed to be showing', () => {
      beforeEach(() => {
        sideBar.props = {
          sideBarShowing: true
        };
        sideBarClassName = sideBar.sideBarClassName();
      });

      it('returns --showing', () => {
        expect(sideBarClassName).to.equal('side-bar side-bar--showing');
      });
    });

    context('when the side bar is not supposed to be showing', () => {
      beforeEach(() => {
        sideBar.props = {
          sideBarShowing: false
        };
        sideBarClassName = sideBar.sideBarClassName();
      });

      it('does not return --showing', () => {
        expect(sideBarClassName).to.equal('side-bar');
      });
    });
  });

  describe('sideBarProjectClassName', () => {
    let sideBarProjectClassName;
    let sideBar;

    beforeEach(() => {
      sideBar = new SideBar();
      sideBar.props = {
        activeProject: project
      };

      sideBarProjectClassName = sideBar.sideBarProjectClassName(projects.last());
    });

    it('returns active if true', () => {
      expect(sideBarProjectClassName).to.equal('side-bar__project side-bar__project--active');
    });
  });

  describe('sideBarBulletClassName', () => {
    let sideBarBulletClassName;
    let sideBar;

    beforeEach(() => {
      sideBar = new SideBar();
      sideBar.props = {
        activeProject: project
      };

      sideBarBulletClassName = sideBar.sideBarBulletClassName(projects.last());
    });

    it('returns active if true', () => {
      expect(sideBarBulletClassName).to.equal('side-bar__bullet side-bar__bullet--active');
    });
  });

  describe('sideBarBulletStyles', () => {
    let sideBarBulletStyles;
    let sideBar;
    const color1 = faker.internet.color();
    const color2 = faker.internet.color();

    const project = fromJS({
      id: faker.random.number(),
      attributes: {
        title: faker.random.word(),
        github_page_url: faker.internet.url(),
        web_page_url: faker.internet.url(),
        body: faker.lorem.sentences(),
        description: faker.lorem.sentence(),
        date_deployed: '2016-03-13 20:45:16'
      },
      relationships: {
        color_set: {
          data: {
            type: 'color-sets',
            id: 19
          }
        }
      }
    });

    const colorSets = new List([
      new Map({
        id: 19,
        type: 'color-sets',
        attributes: new Map({
          background: color1,
          button: color1,
          circle: color1
        })
      }),
      new Map({
        id: 20,
        type: 'color-sets',
        attributes: new Map({
          background: color2,
          button: color2,
          circle: color2
        })
      })
    ]);

    beforeEach(() => {
      sideBar = new SideBar();
      sideBar.props = {
        activeProject: project,
        colorSets: colorSets
      };

      sideBarBulletStyles = sideBar.sideBarBulletStyles(project);
    });

    it('returns a background and border-color', () => {
      expect(sideBarBulletStyles).to.deep.eq({
        background: color1,
        borderColor: color1
      });
    });
  });
});
