import { PortfolioRoot } from './index.js';

describe('PortfolioRoot', () => {
  let portfolioRoot;

  before(() => {
    portfolioRoot = new PortfolioRoot();
  });

  describe('componentWillMount', () => {
    let fetchProjects;

    before(() => {
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

  describe('portfolioRootContainerClassName', () => {
    let portfolioRootContainerClassName;

    before(() => {
      portfolioRoot = new PortfolioRoot();
      portfolioRoot.props = {
        sideBarShowing: true
      };
    });

    beforeEach(() => {
      portfolioRootContainerClassName = portfolioRoot.portfolioRootContainerClassName();
    });

    it('returns --pushed if true', () => {
      expect(portfolioRootContainerClassName).to.equal('portfolio-root__container portfolio-root__container--pushed');
    });
  });
});
