import reducer from '../../index';
import { SIDE_BAR_HANDLE_SUCCESS } from '../../../constants/actionTypes';
import { initialState } from '../index-test';

describe('reducer', () => {
  describe('action SIDE_BAR_HANDLE_SUCCESS', () => {
    it('sets sideBarShown to true if being sent true', () => {
      const action = {
        type: SIDE_BAR_HANDLE_SUCCESS,
        isShowing: true
      };

      const stateAfter = initialState.set('sideBarShowing', true);

      expect(stateAfter).to.eql(reducer(initialState, action));
    });

    it('sets sideBarShown to false if being sent false', () => {
      const trueInitialState = initialState.set('sideBarShowing', true);

      const action = {
        type: SIDE_BAR_HANDLE_SUCCESS,
        isShowing: false
      };

      const stateAfter = trueInitialState.set('sideBarShowing', false);

      expect(stateAfter).to.eql(reducer(trueInitialState, action));
    });
  });
});
