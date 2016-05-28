import reducer from '../../index';
import { SIDE_BAR_SHOWN_SUCCESS } from '../../../constants/actionTypes';

describe('reducer', () => {
  describe('action SIDE_BAR_SHOWN_SUCCESS', () => {
    it('sets sideBarShown to true if already set to false', () => {
      const initialState = new Map({
        projects: new List([]),
        colorSets: new List([]),
        languages: new List([]),
        devices: new List([]),
        activeProject: new Map(),
        sideBarShowing: false
      });

      const action = {
        type: SIDE_BAR_SHOWN_SUCCESS
      };

      const stateAfter = new Map({
        projects: new List([]),
        colorSets: new List([]),
        languages: new List([]),
        devices: new List([]),
        activeProject: new Map(),
        sideBarShowing: true
      });

      expect(stateAfter).to.eql(reducer(initialState, action));
    });

    it('sets sideBarShown to false if already set to true', () => {
      const initialState = new Map({
        projects: new List([]),
        colorSets: new List([]),
        languages: new List([]),
        devices: new List([]),
        activeProject: new Map(),
        sideBarShowing: true
      });

      const action = {
        type: SIDE_BAR_SHOWN_SUCCESS
      };

      const stateAfter = new Map({
        projects: new List([]),
        colorSets: new List([]),
        languages: new List([]),
        devices: new List([]),
        activeProject: new Map(),
        sideBarShowing: false
      });

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
