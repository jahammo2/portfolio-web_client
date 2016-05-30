import reducer from '../../index';
import { PROJECTS_FETCHED_SUCCESS } from '../../../constants/actionTypes';

describe('reducer', () => {
  const initialState = new Map({
    projects: new List([]),
    colorSets: new List([]),
    languages: new List([]),
    devices: new List([]),
    activeProject: new Map()
  });

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

      const stateAfter = new Map({
        projects: new List(projects.data),
        colorSets: new List([]),
        languages: new List([]),
        devices: new List([]),
        activeProject: new Map()
      });

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
