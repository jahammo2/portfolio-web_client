import reducer from '../../index';
import { BIO_FETCHED_SUCCESS } from '../../../constants/actionTypes';
import { initialState } from '../index-test';

describe('reducer', () => {
  describe('action BIO_FETCHED_SUCCESS', () => {
    it('is working without mutating before state', () => {
      const bio = {
        data: {
          attributes: {}
        }
      };

      const action = {
        type: BIO_FETCHED_SUCCESS,
        bio: bio
      };

      const stateAfter = initialState.set('bio', fromJS(bio.data));

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
