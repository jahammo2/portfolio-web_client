import reducer from '../../index';
import { PROJECT_ACTIVE_SUCCESS } from '../../../constants/actionTypes';
import { initialState } from '../index-test';
import { fromJS, Map } from 'immutable';

describe('reducer', () => {
  describe('action PROJECT_ACTIVE_SUCCESS', () => {
    it('is working without mutating before state', () => {
      const project = { data: new Map() };

      const action = {
        type: PROJECT_ACTIVE_SUCCESS,
        project: project
      };

      const stateAfter = initialState.set('activeProject', new Map(project));

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

      const stateAfter = initialState.set('activeProject', project);

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
