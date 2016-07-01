import { PortfolioRoot } from './index.js';

describe('PortfolioRoot', () => {
  let portfolioRoot;

  before(() => {
    portfolioRoot = new PortfolioRoot();
  });

  describe('componentDidUpdate', () => {
    let fetchProjects;

    before(() => {
      portfolioRoot.props = {
        fetchProjects: () => {
          return;
        },
        colorSets: new List([new Map()])
      };

      fetchProjects = spy(portfolioRoot.props, 'fetchProjects');
    });

    it('calls fetchProjects if only 1 colorSet is present', () => {
      portfolioRoot.componentDidUpdate();
      expect(fetchProjects.calledOnce).to.be.true;
    });

    afterEach(() => {
      fetchProjects.restore();
    });
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

    it('calls fetchProjects', () => {
      portfolioRoot.componentWillMount();
      expect(fetchProjects.calledOnce).to.be.true;
    });

    afterEach(() => {
      fetchProjects.restore();
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
