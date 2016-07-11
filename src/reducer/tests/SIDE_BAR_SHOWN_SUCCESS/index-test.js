import reducer from '../../index';
import { SIDE_BAR_SHOWN_SUCCESS } from '../../../constants/actionTypes';
import { initialState } from '../index-test';

describe('reducer', () => {
  describe('action SIDE_BAR_SHOWN_SUCCESS', () => {
    it('sets sideBarShown to true if already set to false', () => {
      const action = {
        type: SIDE_BAR_SHOWN_SUCCESS
      };

      const stateAfter = initialState.set('sideBarShowing', true);

      expect(stateAfter).to.eql(reducer(initialState, action));
    });

    it('sets sideBarShown to false if already set to true', () => {
      const trueInitialState = initialState.set('sideBarShowing', true);

      const action = {
        type: SIDE_BAR_SHOWN_SUCCESS
      };

      const stateAfter = trueInitialState.set('sideBarShowing', false);

      expect(stateAfter).to.eql(reducer(trueInitialState, action));
    });
  });
});
