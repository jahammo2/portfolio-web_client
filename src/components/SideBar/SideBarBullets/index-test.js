import SideBarBullets from './index';

describe('SideBarBullets', () => {
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

  describe('sideBarBulletsBulletClassName', () => {
    let sideBarBulletClassName;
    let sideBarBullets;

    beforeEach(() => {
      sideBarBullets = new SideBarBullets();
      sideBarBullets.props = {
        isActiveProject: (currentProject, activeProject) => {
          return activeProject.get('id') === currentProject.get('id');
        },
        activeProject: project
      };

      sideBarBulletClassName = sideBarBullets.sideBarBulletClassName(projects.last());
    });

    it('returns active if true', () => {
      expect(sideBarBulletClassName).to.equal('side-bar__bullet side-bar__bullet--active');
    });
  });

  describe('sideBarBulletsBulletStyles', () => {
    let sideBarBulletStyles;
    let sideBarBullets;
    const color1 = faker.internet.color();
    const color2 = faker.internet.color();

    const expectedProject = fromJS({
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
      sideBarBullets = new SideBarBullets();
      sideBarBullets.props = {
        isActiveProject: (currentProject, activeProject) => {
          return activeProject.get('id') === currentProject.get('id');
        },
        activeProject: expectedProject,
        colorSets: colorSets
      };

      sideBarBulletStyles = sideBarBullets.sideBarBulletStyles(expectedProject);
    });

    it('returns a background and border-color', () => {
      expect(sideBarBulletStyles).to.deep.eq({
        background: color1,
        borderColor: color1
      });
    });
  });
});
