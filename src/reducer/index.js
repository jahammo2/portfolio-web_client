import { combineReducers } from 'redux';
import { List, Map, fromJS } from 'immutable';
import faker from 'faker';

const INITIAL_STATE = new Map({
  projects: new List([]),
  colorSets: new List([])
});

// const INITIAL_STATE = new Map();
function setProjectStates (state, projects) {
  return state.withMutations(function (map) {
    map.set('projects', new List(projects.data));

    const included = {};
    projects.included.forEach(function(include) {
      included[include.type] = included[include.type] || [];
      included[include.type].push(include);
    });
    map.set('colorSets', fromJS(included['color-sets']) || new List([]));
    // map.set('languages', fromJS(included.languages));
    // Object.keys(included).forEach((key) => {
      // map.set(key, fromJS(included[key]);
    // });
  });
}

const reducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PROJECTS_FETCHED_SUCCESS':
      // console.log("1");
      // console.log(action.projects);
      // return state.set('projects', new List(action.projects.data));
      return setProjectStates(state, action.projects);
    default:
      // console.log(action);
      return state;
  }
}

export default reducer;
