import { List, Map, fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes.js';

const INITIAL_STATE = new Map({
  projects: new List([]),
  colorSets: new List([]),
  devices: new List([]),
  languages: new List([]),
  activeProject: new Map(),
  sideBarShowing: false
});

function setIncludedData (projects, included) {
  return projects.included.forEach(function (include) {
    included[include.type] = included[include.type] || [];
    included[include.type].push(include);
  });
}

function setFromIncluded (included, map) {
  map.set('colorSets', fromJS(included['color-sets']) || new List([]));
  map.set('languages', fromJS(included.languages) || new List([]));
  map.set('devices', fromJS(included.devices) || new List([]));
}

function setProjectStates (state, projects) {
  return state.withMutations(function (map) {
    const included = {};

    setIncludedData(projects, included);
    setFromIncluded(included, map);

    map.set('projects', fromJS(projects.data));
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
      return setProjectStates(state, action.projects);
    case actionTypes.PROJECT_ACTIVE_SUCCESS:
      return state.set('activeProject', fromJS(action.project));
    case actionTypes.SIDE_BAR_SHOWN_SUCCESS:
      return showOrHideSideBar(state);
    default:
      return state;
  }
};

export default reducer;
