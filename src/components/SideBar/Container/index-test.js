import React from 'react';
import Container from './index';
import { shallow } from 'enzyme';
import * as ActionCreators from '../../../actions/PortfolioActions';
import Immutable from 'immutable';

const List = Immutable.List;
const Map = Immutable.Map;

describe('Container', () => {
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

    beforeEach(() => {
      setActiveProject = spy(ActionCreators, 'projectActive');
      sideBarShown = spy(ActionCreators, 'sideBarShown');

      component = shallow(
        <Container
          projects={projects}
          activeProject={project}
          isActiveProject={isActiveProject}
          setActiveProject={ActionCreators.projectActive}
          sideBarShown={ActionCreators.sideBarShown}
          colorSets={new List([])}
          socialLinks={new List([])}
          fetchSocialLinks={ActionCreators.fetchSocialLinks}
        />
      );

      component.find('li.side-bar__project')
        .last()
        .childAt(0)
        .simulate('click');
    });

    it('calls setActiveProject on clicking of link', () => {
      expect(setActiveProject.withArgs(project).calledOnce).to.be.true;
    });

    it('calls containerShown on clicking of link', () => {
      expect(sideBarShown.calledOnce).to.be.true;
    });

    afterEach(() => {
      setActiveProject.restore();
      sideBarShown.restore();
    });
  });

  describe('containerProjectClassName', () => {
    let sideBarProjectClassName;
    let container;

    beforeEach(() => {
      container = new Container();
      container.props = {
        isActiveProject: (currentProject, activeProject) => {
          return activeProject.get('id') === currentProject.get('id');
        },
        activeProject: project
      };

      sideBarProjectClassName = container.sideBarProjectClassName(projects.last());
    });

    it('returns active if true', () => {
      expect(sideBarProjectClassName).to.equal('side-bar__project side-bar__project--active');
    });
  });
});
