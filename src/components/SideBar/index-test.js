import SideBar from './index';

describe('SideBar', () => {
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

  describe('isActiveProject', () => {
    let isActiveProject;
    let sideBar;

    beforeEach(() => {
      sideBar = new SideBar();
      sideBar.props = {
        activeProject: project
      };
      isActiveProject = sideBar.isActiveProject(projects.last(), project);
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
        expect(sideBarClassName).to.equal('side-bar side-bar--showing row-between');
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
        expect(sideBarClassName).to.equal('side-bar row-between');
      });
    });
  });
});
