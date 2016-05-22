import { setActiveProject } from '../utils/ActionHelpers';

export function projectActive (project) {
  return {
    type: 'PROJECT_ACTIVE_SUCCESS',
    project
  };
}

export function projectsFetched (projects) {
  return {
    type: 'PROJECTS_FETCHED_SUCCESS',
    projects
  };
}

export function fetchProjects () {
  return function (dispatch) {
    return window
      .fetch('http://localhost:3000/api/projects')
        .then(response => response.json())
        .then((response) => {
          dispatch(projectsFetched(response));
          setActiveProject(response.data, dispatch, projectActive);
        });
  };
}
