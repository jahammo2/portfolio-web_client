import Bullets from './index';
import * as ProjectHelpers from '../../../utils/ProjectHelpers';

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

  describe('bulletClassName', () => {
    let bulletClassName;
    let bullets;

    beforeEach(() => {
      bullets = new Bullets();
      bullets.props = {
        isActiveProject: (currentProject, activeProject) => {
          return activeProject.get('id') === currentProject.get('id');
        },
        activeProject: project
      };

      bulletClassName = bullets.bulletClassName(projects.last());
    });

    it('returns active if true', () => {
      expect(bulletClassName).to.equal('side-bar__bullet side-bar__bullet--active');
    });
  });

  describe('bulletStyles', () => {
    let bullets;
    let getColor;
    const colorSets = new List([]);

    beforeEach(() => {
      getColor = spy(ProjectHelpers, 'getColor');
      bullets = new Bullets();

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
});
