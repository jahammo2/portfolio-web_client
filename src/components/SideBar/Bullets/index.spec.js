import Bullets from './index';
import * as ProjectHelpers from '../../../utils/ProjectHelpers';
import Immutable from 'immutable';

const List = Immutable.List;
const Map = Immutable.Map;

describe('Bullets', () => {
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
  let bullets;

  beforeEach(() => {
    bullets = new Bullets();
    bullets.props = {
      isActiveProject: (currentProject, activeProject) => {
        return activeProject.get('id') === currentProject.get('id');
      },
      activeProject: project
    };
  });

  describe('bulletClassName', () => {
    let bulletClassName;

    beforeEach(() => {
      bulletClassName = bullets.bulletClassName(projects.last());
    });

    it('returns active if true', () => {
      expect(bulletClassName).to.equal('side-bar__bullet side-bar__bullet--active');
    });
  });

  describe('bulletStyles', () => {
    let getColor;
    const colorSets = new List([]);

    beforeEach(() => {
      getColor = spy(ProjectHelpers, 'getColor');

      bullets.props = {
        isActiveProject: (currentProject, activeProject) => {
          return activeProject.get('id') === currentProject.get('id');
        },
        activeProject: project,
        colorSets: colorSets
      };
    });

    it('calls getColor if the project is the activeProject', () => {
      bullets.bulletStyles(project);
      expect(getColor.calledOnce).to.be.true;
    });
  });

  describe('bulletIsToBeHighlighted', () => {
    let isActiveProject;

    it('returns true if state.hover is the project in question', () => {
      isActiveProject = stub(bullets.props, 'isActiveProject').returns(false);
      bullets.state = {
        hover: project
      };

      expect(bullets.bulletIsToBeHighlighted(project)).to.be.true;
    });

    it('returns true if state.hover is not the project in question but the project is active', () => {
      isActiveProject = stub(bullets.props, 'isActiveProject').returns(true);
      bullets.state = {
        hover: null
      };

      expect(bullets.bulletIsToBeHighlighted(project)).to.be.true;
    });

    it('returns false if state.hover is not the project in question and the project is not active', () => {
      isActiveProject = stub(bullets.props, 'isActiveProject').returns(false);
      bullets.state = {
        hover: null
      };

      expect(bullets.bulletIsToBeHighlighted(project)).to.be.false;
    });

    afterEach(() => {
      isActiveProject.restore();
    });
  });
});
