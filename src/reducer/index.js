import { List, Map, fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes.js';

const INITIAL_STATE = new Map({
  projects: new List([]),
  individualProject: new Map(),
  colorSets: new List([]),
  screenshots: new List([]),
  devices: new List([]),
  languages: new List([]),
  activeProject: new Map(),
  sideBarShowing: false,
  socialLinks: new List([]),
  bio: new Map()
});

function setIncludedData (projects, included) {
  return projects.included.forEach((include) => {
    included[include.type] = included[include.type] || [];
    included[include.type].push(include);
  });
}

function setFromColorSets (included, map) {
  map.set('colorSets', fromJS(included['color-sets']) || new List([]));
}

function setFromNonColorSets (included, map) {
  map.set('languages', fromJS(included.languages) || new List([]));
  map.set('devices', fromJS(included.devices) || new List([]));
  map.set('screenshots', fromJS(included.screenshots) || new List([]));
}

function setProjectStates (state, projects, setter, setFromIncluded) {
  return state.withMutations((map) => {
    const included = {};

    setIncludedData(projects, included);
    setFromIncluded(included, map);

    map.set(setter, fromJS(projects.data));
  });
}

function showOrHideSideBar (state) {
  if (state.get('sideBarShowing')) {
    return state.set('sideBarShowing', false);
  }

  return state.set('sideBarShowing', true);
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.PROJECTS_FETCHED_SUCCESS:
      return setProjectStates(state, action.projects, 'projects', setFromColorSets);
    case actionTypes.PROJECT_ACTIVE_SUCCESS:
      return state.set('activeProject', fromJS(action.project));
    case actionTypes.PROJECT_FETCHED_SUCCESS:
      return setProjectStates(state, action.project, 'individualProject', setFromNonColorSets);
    case actionTypes.SIDE_BAR_SHOWN_SUCCESS:
      return showOrHideSideBar(state);
    case actionTypes.SOCIAL_LINKS_FETCHED_SUCCESS:
      return state.set('socialLinks', fromJS(action.socialLinks.data));
    case actionTypes.BIO_FETCHED_SUCCESS:
      return state.set('bio', fromJS(action.bio.data));
    default:
      return state;
  }
};

export default reducer;
