import * as PortfolioActions from './PortfolioActions';

describe('PortfolioActions', () => {
  let response;
  let stubbedFetch;

  describe('fetchProjects', () => {
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
        expect(dispatch.args[0]).to.deep.include({
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
        expect(dispatch.args[1]).to.deep.include({
          type: 'PROJECT_ACTIVE_SUCCESS',
          project: response.data[0]
        });
      });
    });

    afterEach(() => {
      stubbedFetch.restore();
    });
  });

  describe('fetchProjectById', () => {
    beforeEach(() => {
      response = {
        data: {
          attributes: {
            featured: true
          }
        },
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

    it('dispatches projectFetched', () => {
      const dispatch = spy();
      const asyncAction = PortfolioActions.fetchProjectById(0);
      const action = asyncAction(dispatch);

      return action.then(() => {
        expect(dispatch.args[0][0]).to.deep.equal({
          type: 'PROJECT_FETCHED_SUCCESS',
          project: response
        });
      });
    });

    afterEach(() => {
      stubbedFetch.restore();
    });
  });

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
      const asyncAction = PortfolioActions.fetchSocialLinks();
      const action = asyncAction(dispatch);

      return action.then(() => {
        expect(dispatch.args[0]).to.deep.include({
          type: 'SOCIAL_LINKS_FETCHED_SUCCESS',
          socialLinks: response
        });
      });
    });

    afterEach(() => {
      stubbedFetch.restore();
    });
  });

  describe('fetchBio', () => {
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
      const asyncAction = PortfolioActions.fetchBio();
      const action = asyncAction(dispatch);

      return action.then(() => {
        expect(dispatch.args[0]).to.deep.include({
          type: 'BIO_FETCHED_SUCCESS',
          bio: response
        });
      });
    });

    afterEach(() => {
      stubbedFetch.restore();
    });
  });
});
