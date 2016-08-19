import { setActiveProject } from '../utils/ActionHelpers';

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
    return window
      .fetch(`${process.env.HOST}/api/projects`)
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
      .fetch(`${process.env.HOST}/api/projects/${id}`)
        .then(response => response.json())
        .then((response) => {
          dispatch(projectFetched(response));
        });
  };
}

export function fetchSocialLinks () {
  return (dispatch) => {
    return window
      .fetch(`${process.env.HOST}/api/social-links`)
        .then(response => response.json())
        .then((response) => {
          dispatch(socialLinksFetched(response));
        });
  };
}

export function fetchBio () {
  return (dispatch) => {
    return window
      .fetch(`${process.env.HOST}/api/bio`)
        .then(response => response.json())
        .then((response) => {
          dispatch(bioFetched(response));
        });
  };
}
