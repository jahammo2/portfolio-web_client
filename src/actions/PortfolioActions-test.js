import * as PortfolioActions from './PortfolioActions';
import apiService from '../services/api';

describe('PortfolioActions', () => {
  let data;
  let stubbedFetch;

  describe('fetchProjects', () => {
    beforeEach(() => {
      data = {
        data: [{
          attributes: {
            featured: true
          }
        }],
        included: []
      };

      stubbedFetch = stub(apiService, 'get').returns(
        Promise.resolve({ data })
      );
    });

    it('dispatches projectsFetched', () => {
      const dispatch = spy();
      const asyncAction = PortfolioActions.fetchProjects();
      const action = asyncAction(dispatch);

      return action.then(() => {
        expect(dispatch.args[0]).to.deep.include({
          type: 'PROJECTS_FETCHED_SUCCESS',
          projects: data
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
          project: data.data[0]
        });
      });
    });

    afterEach(() => {
      stubbedFetch.restore();
    });
  });

  describe('fetchProjectById', () => {
    beforeEach(() => {
      data = {
        data: {
          attributes: {
            featured: true
          }
        },
        included: []
      };

      stubbedFetch = stub(apiService, 'get').returns(
        Promise.resolve({ data })
      );
    });

    it('dispatches projectFetched', () => {
      const dispatch = spy();
      const asyncAction = PortfolioActions.fetchProjectById(0);
      const action = asyncAction(dispatch);

      return action.then(() => {
        expect(dispatch.args[0][0]).to.deep.equal({
          type: 'PROJECT_FETCHED_SUCCESS',
          project: data
        });
      });
    });

    afterEach(() => {
      stubbedFetch.restore();
    });
  });

  describe('fetchSocialLinks', () => {
    beforeEach(() => {
      data = {
        data: [{
          attributes: {
            url: ''
          }
        }]
      };

      stubbedFetch = stub(apiService, 'get').returns(
        Promise.resolve({ data })
      );
    });

    it('dispatches socialLinksFetched', () => {
      const dispatch = spy();
      const asyncAction = PortfolioActions.fetchSocialLinks();
      const action = asyncAction(dispatch);

      return action.then(() => {
        expect(dispatch.args[0]).to.deep.include({
          type: 'SOCIAL_LINKS_FETCHED_SUCCESS',
          socialLinks: data
        });
      });
    });

    afterEach(() => {
      stubbedFetch.restore();
    });
  });

  describe('fetchBio', () => {
    beforeEach(() => {
      data = {
        data: [{
          attributes: {
            url: ''
          }
        }]
      };

      stubbedFetch = stub(apiService, 'get').returns(
        Promise.resolve({ data })
      );
    });

    it('dispatches socialLinksFetched', () => {
      const dispatch = spy();
      const asyncAction = PortfolioActions.fetchBio();
      const action = asyncAction(dispatch);

      return action.then(() => {
        expect(dispatch.args[0]).to.deep.include({
          type: 'BIO_FETCHED_SUCCESS',
          bio: data
        });
      });
    });

    afterEach(() => {
      stubbedFetch.restore();
    });
  });
});
