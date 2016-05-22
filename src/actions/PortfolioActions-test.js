import * as PortfolioActions from './PortfolioActions';
import 'whatwg-fetch';

describe('PortfolioActions', () => {
  describe('fetchProjects', () => {
    let response;
    let stubbedFetch;

    beforeEach(() => {
      response = {
        data: [{
          attributes: {
            featured: true
          }
        }],
        included: []
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

    it('dispatches projectsFetched', () => {
      const dispatch = spy();
      const asyncAction = PortfolioActions.fetchProjects();
      const action = asyncAction(dispatch);

      return action.then(() => {
        expect(dispatch.args[0]).to.include({
          type: 'PROJECTS_FETCHED_SUCCESS',
          projects: response
        });
      });
    });

    it('dispatches projectActive', () => {
      const dispatch = spy();
      const asyncAction = PortfolioActions.fetchProjects();
      const action = asyncAction(dispatch);

      return action.then(() => {
        expect(dispatch.args[1]).to.include({
          type: 'PROJECT_ACTIVE_SUCCESS',
          project: response.data[0]
        });
      });
    });

    afterEach(() => {
      stubbedFetch.restore();
    });
  });
});
