import { setActiveProject } from '../utils/ActionHelpers';
import apiService from '../services/api';

export function sideBarShown (isShowing = false) {
  return {
    type: 'SIDE_BAR_HANDLE_SUCCESS',
    isShowing
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

export function socialLinksFetched (socialLinks) {
  return {
    type: 'SOCIAL_LINKS_FETCHED_SUCCESS',
    socialLinks
  };
}

export function bioFetched (bio) {
  return {
    type: 'BIO_FETCHED_SUCCESS',
    bio
  };
}

export function fetchProjects () {
  return (dispatch) => {
    return apiService
      .get('/api/projects')
      .then(({ data }) => {
        dispatch(projectsFetched(data));
        setActiveProject(data.data, dispatch, projectActive);
      });
  };
}

export function fetchProjectById (id) {
  return (dispatch) => {
    return apiService
      .get(`/api/projects/${id}`)
      .then(({ data }) => {
        dispatch(projectFetched(data));
      });
  };
}

export function fetchSocialLinks () {
  return (dispatch) => {
    return apiService
      .get('/api/social-links')
      .then(({ data }) => {
        dispatch(socialLinksFetched(data));
      });
  };
}

export function fetchBio () {
  return (dispatch) => {
    return apiService
      .get('/api/bio')
      .then(({ data }) => {
        dispatch(bioFetched(data));
      });
  };
}
