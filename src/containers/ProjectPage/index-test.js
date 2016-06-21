import { ProjectPage } from './index.js';

describe('ProjectPage', () => {
  let projectPage;
  let project;

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

  describe('componentDidUpdate', () => {
    let projectActive;

    before(() => {
      project = projects.last();
      projectPage = new ProjectPage();
      projectPage.props = {
        projectActive: () => {
          return;
        },
        projects: projects,
        params: {
          projectId: project.get('id')
        }
      };

      projectActive = spy(projectPage.props, 'projectActive');
    });

    it('calls ProjectActive if the projectId matches a project id', () => {
      projectPage.componentDidUpdate();
      expect(projectActive.calledOnce).to.be.true;
    });
  });

  describe('sisterProject', () => {
    before(() => {
      projectPage = new ProjectPage();
      projectPage.props = {
        projects: projects,
        project: projects.get(1)
      };
    });

    it('returns the next project if +1', () => {
      const sisterProject = projectPage.sisterProject(1);
      expect(sisterProject).to.equal(projects.get(2));
    });

    it('returns the previous project if -1', () => {
      const sisterProject = projectPage.sisterProject(-1);
      expect(sisterProject).to.equal(projects.get(0));
    });

    it('returns the first project if +1 and the last project is the current project', () => {
      projectPage.props = {
        projects: projects,
        project: projects.get(2)
      };
      const sisterProject = projectPage.sisterProject(+1);

      expect(sisterProject).to.equal(projects.get(0));
    });
  });
});
