import { setActiveProject, getHost } from '../utils/ActionHelpers';

export function sideBarShown () {
  return {
    type: 'SIDE_BAR_SHOWN_SUCCESS'
  };
}

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

export function projectFetched (project) {
  return {
    type: 'PROJECT_FETCHED_SUCCESS',
    project
  };
}

export function fetchProjects () {
  return (dispatch) => {
    return window
      .fetch(`${getHost()}/api/projects`)
        .then(response => response.json())
        .then((response) => {
          dispatch(projectsFetched(response));
          setActiveProject(response.data, dispatch, projectActive);
        });
  };
}

export function fetchProjectById (id) {
  return (dispatch) => {
    return window
      .fetch(`${getHost()}/api/projects/${id}`)
        .then(response => response.json())
        .then((response) => {
          dispatch(projectFetched(response));
        });
  };
}
