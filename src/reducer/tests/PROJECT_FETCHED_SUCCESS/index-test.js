import reducer from '../../index';
import { PROJECT_FETCHED_SUCCESS } from '../../../constants/actionTypes';

describe('reducer', () => {
  const initialState = new Map({
    projects: new List([]),
    individualProject: new Map(),
    colorSets: new List([]),
    screenshots: new List([]),
    languages: new List([]),
    devices: new List([]),
    activeProject: new Map()
  });

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

      const stateAfter = new Map({
        projects: new List([]),
        individualProject: new Map(project.data),
        colorSets: new List([]),
        screenshots: new List([]),
        languages: new List([]),
        devices: new List([]),
        activeProject: new Map()
      });

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
