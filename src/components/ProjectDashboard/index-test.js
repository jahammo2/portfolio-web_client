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

    context('when deltaY hits -18 (scrolling up)', () => {
      const stubEvent = {
        deltaY: -18
      };

      beforeEach(() => {
        getSisterProject = spy(ProjectHelpers, 'getSisterProject');
        setState = spy(projectDashboard, 'setState');
        setActiveProject = spy(projectDashboard.props, 'setActiveProject');
        projectDashboard.scrollThroughProjects(stubEvent);
      });

      it('calls getSisterProject', () => {
        expect(getSisterProject.calledOnce).to.be.true;
      });

      it('calls setState', () => {
        expect(setState.calledOnce).to.be.true;
      });

      it('calls setActiveProject', () => {
        expect(setActiveProject.calledOnce).to.be.true;
      });
    });

    context('when deltaY hits 18 (scrolling down)', () => {
      const stubEvent = {
        deltaY: 18
      };

      beforeEach(() => {
        getSisterProject = spy(ProjectHelpers, 'getSisterProject');
        setState = spy(projectDashboard, 'setState');
        setActiveProject = spy(projectDashboard.props, 'setActiveProject');
        projectDashboard.scrollThroughProjects(stubEvent);
      });

      it('calls getSisterProject', () => {
        expect(getSisterProject.calledOnce).to.be.true;
      });

      it('calls setState', () => {
        expect(setState.calledOnce).to.be.true;
      });

      it('calls setActiveProject', () => {
        expect(setActiveProject.calledOnce).to.be.true;
      });
    });

    context('when deltaY stays between -18 and 18 (very light scrolling in either direction)', () => {
      const stubEvent = {
        deltaY: 2
      };

      beforeEach(() => {
        getSisterProject = spy(ProjectHelpers, 'getSisterProject');
        setState = spy(projectDashboard, 'setState');
        setActiveProject = spy(projectDashboard.props, 'setActiveProject');
        projectDashboard.scrollThroughProjects(stubEvent);
      });

      it('does not call getSisterProject', () => {
        expect(getSisterProject.calledOnce).to.be.false;
      });

      it('does not call setState', () => {
        expect(setState.calledOnce).to.be.false;
      });

      it('does not call setActiveProject', () => {
        expect(setActiveProject.calledOnce).to.be.false;
      });
    });

    afterEach(() => {
      getSisterProject.restore();
      setState.restore();
      setActiveProject.restore();
    });
  });
});
