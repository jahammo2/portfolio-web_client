import reducer from '../../index';
import { PROJECT_FETCHED_SUCCESS } from '../../../constants/actionTypes';
import { initialState } from '../index-test';
import { List, Map } from 'immutable';

describe('reducer', () => {
  describe('action PROJECT_FETCHED_SUCCESS', () => {
    it('sets individualProject without mutating before state', () => {
      const project = {
        data: new Map(),
        included: new List([])
      };

      const action = {
        type: PROJECT_FETCHED_SUCCESS,
        project: project
      };

      const stateAfter = initialState.set('individualProject', new Map(project.data));

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
