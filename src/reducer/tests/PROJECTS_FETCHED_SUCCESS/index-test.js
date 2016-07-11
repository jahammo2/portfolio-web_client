import reducer from '../../index';
import { PROJECTS_FETCHED_SUCCESS } from '../../../constants/actionTypes';
import { initialState } from '../index-test';

describe('reducer', () => {
  describe('action PROJECTS_FETCHED_SUCCESS', () => {
    it('is working without mutating before state', () => {
      const projects = {
        data: [],
        included: []
      };

      const action = {
        type: PROJECTS_FETCHED_SUCCESS,
        projects: projects
      };

      const stateAfter = initialState.set('projects', new List(projects.data));

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
