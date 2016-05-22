import { PortfolioRoot } from './index.js';

describe('PortfolioRoot', () => {
  describe('componentWillMount', () => {
    let fetchProjects;
    let portfolioRoot;

    before(() => {
      portfolioRoot = new PortfolioRoot();

      portfolioRoot.props = {
        fetchProjects: () => {
          return;
        }
      };

      fetchProjects = spy(portfolioRoot.props, 'fetchProjects');
    });

    beforeEach(() => {
      portfolioRoot.componentWillMount();
    });

    it('calls fetchProjects', () => {
      expect(fetchProjects.calledOnce).to.be.true;
    });
  });
});
