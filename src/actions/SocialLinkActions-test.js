import * as SocialLinkActions from './SocialLinkActions';
import 'whatwg-fetch';

describe('SocialLinkActions', () => {
  let response;
  let stubbedFetch;

  describe('fetchSocialLinks', () => {
    beforeEach(() => {
      response = {
        data: [{
          attributes: {
            url: ''
          }
        }]
      };
      stubbedFetch = stub(window, 'fetch').returns(
        Promise.resolve(
          {
            json: () => {
              return response;
            }
          }
        )
      );
    });

    it('dispatches socialLinksFetched', () => {
      const dispatch = spy();
      const asyncAction = SocialLinkActions.fetchSocialLinks();
      const action = asyncAction(dispatch);

      return action.then(() => {
        expect(dispatch.args[0]).to.include({
          type: 'SOCIAL_LINKS_FETCHED_SUCCESS',
          socialLinks: response
        });
      });
    });
  });
});
