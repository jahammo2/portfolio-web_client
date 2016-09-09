import { ProjectDashboard } from './index';
import * as ProjectHelpers from '../../utils/ProjectHelpers';

describe('ProjectDashboard', () => {
  describe('swipe', () => {
    let projectDashboard;
    let getSisterProject;
    let setActiveProject;
    let direction;

    before(() => {
      projectDashboard = new ProjectDashboard();
      projectDashboard.props = {
        projects: new List([]),
        project: new Map(),
        setActiveProject: () => {
          return;
        }
      };
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
});
