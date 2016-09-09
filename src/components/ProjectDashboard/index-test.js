import { ProjectDashboard } from './index';
import * as ProjectHelpers from '../../utils/ProjectHelpers';

describe('ProjectDashboard', () => {
  describe('scrollThroughProjects', () => {
    let projectDashboard;
    let getSisterProject;
    let setState;
    let setActiveProject;

    before(() => {
      projectDashboard = new ProjectDashboard();
      projectDashboard.state = { currentlyChanging: false };

      projectDashboard.props = {
        projects: new List([]),
        project: new Map(),
        setActiveProject: () => {
          return;
        }
      };
    });
  });
});
