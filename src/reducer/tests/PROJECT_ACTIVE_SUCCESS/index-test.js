import reducer from '../../index';
import { PROJECT_ACTIVE_SUCCESS } from '../../../constants/actionTypes';

describe('draftQuotesReducer', () => {
  const initialState = new Map({
    projects: new List([]),
    colorSets: new List([]),
    languages: new List([]),
    devices: new List([]),
    activeProject: new Map()
  });

  describe('action PROJECT_ACTIVE_SUCCESS', () => {
    it('is working without mutating before state', () => {
      const project = { data: new Map() };

      const action = {
        type: PROJECT_ACTIVE_SUCCESS,
        project: project
      };

      const stateAfter = new Map({
        projects: new List([]),
        colorSets: new List([]),
        languages: new List([]),
        devices: new List([]),
        activeProject: new Map(project)
      });

      expect(stateAfter).to.eql(reducer(initialState, action));
    });

    it('sets activeProject', () => {
      const project = fromJS({
        data: {
          id: faker.random.number(),
          attributes: {
            title: faker.random.word(),
            github_page_url: faker.internet.url(),
            web_page_url: faker.internet.url(),
            body: faker.lorem.sentences(),
            description: faker.lorem.sentence(),
            date_deployed: '2016-03-13 20:45:16'
          }
        }
      });

      const action = {
        type: PROJECT_ACTIVE_SUCCESS,
        project: project
      };

      const stateAfter = new Map({
        projects: new List([]),
        colorSets: new List([]),
        languages: new List([]),
        devices: new List([]),
        activeProject: project
      });

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
