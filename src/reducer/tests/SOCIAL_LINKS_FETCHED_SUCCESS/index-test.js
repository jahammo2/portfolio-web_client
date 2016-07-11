import reducer from '../../index';
import { SOCIAL_LINKS_FETCHED_SUCCESS } from '../../../constants/actionTypes';
import { initialState } from '../index-test';

describe('reducer', () => {
  describe('action SOCIAL_LINKS_FETCHED_SUCCESS', () => {
    it('it is working without mutating before state', () => {
      const socialLinks = {
        data: [{
          attributes: {}
        }]
      };

      const action = {
        type: SOCIAL_LINKS_FETCHED_SUCCESS,
        socialLinks: socialLinks
      };

      const stateAfter = initialState.set('socialLinks', fromJS(socialLinks.data));

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
