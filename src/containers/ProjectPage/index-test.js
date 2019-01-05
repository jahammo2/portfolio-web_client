import { ProjectPage } from './index.js';
import Immutable from 'immutable';

const List = Immutable.List;
const Map = Immutable.Map;

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
    let fetchProjectById;

    before(() => {
      project = projects.last();
      projectPage = new ProjectPage();
      projectPage.state = {
        projectId: projects.first().get('id')
      };
      projectPage.props = {
        fetchProjectById: () => {
          return;
        },
        projects: projects,
        params: {
          projectId: project.get('id')
        }
      };

      fetchProjectById = spy(projectPage.props, 'fetchProjectById');
    });

    it('calls fetchProjectById if the state projectId is different than the props projectId', () => {
      projectPage.componentDidUpdate();
      expect(fetchProjectById.calledOnce).to.be.true;
    });

    afterEach(() => {
      fetchProjectById.restore();
    });
  });

  describe('componentWillMount', () => {
    let fetchProjectById;

    before(() => {
      project = projects.last();
      projectPage = new ProjectPage();
      projectPage.props = {
        fetchProjectById: () => {
          return;
        },
        projects: projects,
        params: {
          projectId: project.get('id')
        }
      };

      fetchProjectById = spy(projectPage.props, 'fetchProjectById');
    });

    it('calls fetchProjectById', () => {
      projectPage.componentWillMount();
      expect(fetchProjectById.calledOnce).to.be.true;
    });

    afterEach(() => {
      fetchProjectById.restore();
    });
  });
});
