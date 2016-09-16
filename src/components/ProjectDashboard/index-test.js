import { ProjectDashboard } from './index';
import * as ProjectHelpers from '../../utils/ProjectHelpers';

describe('ProjectDashboard', () => {
  let projectDashboard;

  before(() => {
    projectDashboard = new ProjectDashboard();
    projectDashboard.props = {
      projects: new List([]),
      project: new Map(),
      setActiveProject: () => {
        return;
      }
    };
  });

  describe('swipe', () => {
    let getSisterProject;
    let setActiveProject;
    let direction;

    before(() => {
      direction = 1;
    });

    beforeEach(() => {
      getSisterProject = spy(ProjectHelpers, 'getSisterProject');
      setActiveProject = spy(projectDashboard.props, 'setActiveProject');
      projectDashboard.swipe(direction);
    });

    it('calls getSisterProject', () => {
      expect(getSisterProject.calledWith(direction)).to.be.true;
    });

    it('calls setActiveProject', () => {
      expect(setActiveProject.calledOnce).to.be.true;
    });

    afterEach(() => {
      getSisterProject.restore();
      setActiveProject.restore();
    });
  });

  describe('handleSwipeAction', () => {
    let swipe;

    beforeEach(() => {
      swipe = spy(projectDashboard, 'swipe');
    });

    it('calls swipe[up] if the velocity is greater than 1 and the direction (y) is negative', () => {
      projectDashboard.handleSwipeAction(null, null, -2, null, 2);
      expect(swipe.calledWith(-1)).to.be.true;
    });

    it('calls swipe[down] if the velocity is greater than 1 and the direction (y) is positive', () => {
      projectDashboard.handleSwipeAction(null, null, 2, null, 2);
      expect(swipe.calledWith(1)).to.be.true;
    });

    afterEach(() => {
      swipe.restore();
    });

    after(() => {
      swipe.reset();
    });
  });
});
