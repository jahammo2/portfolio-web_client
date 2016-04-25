import reducer from './index';
import { PROJECTS_FETCHED_SUCCESS } from '../constants/actionTypes';
import actionTypes from '../constants/actionTypes';

describe('draftQuotesReducer', () => {
  const initialState = new Map({
    projects: new List([]),
    colorSets: new List([])
  });

  it('returns the initial state', () => {
    expect(initialState).to.eql(reducer(undefined, {}));
  });

  it('defaults to passing the current state', () => {
    const action = {
      type: 'TOTALLY_BOGUS_ACTION_TYPE',
      projects: [{name: 'Winston Churchill', occupation: 'Prime Minister'}]
    };

    expect(initialState).to.eql(reducer(initialState, action));
  });

  describe('action PROJECTS_FETCHED_SUCCESS', () => {
    const projects = {
      data: [],
      included: []
    };

    it('is working without mutating before state', () => {
      const projects = {
        data: [],
        included: []
      };
      const action = {
        type: PROJECTS_FETCHED_SUCCESS,
        projects: projects
      };
      const stateAfter = new Map({
        projects: new List(projects.data),
        colorSets: new List([])
      });

      expect(stateAfter).to.eql(reducer(initialState, action));
    });

    it('sets color-sets', () => {
      const id1 = faker.random.number();
      const id2 = faker.random.number();
      const color1 = faker.internet.color();
      const color2 = faker.internet.color();

      const expectedProjects = {
        data: new List([]),
        included: [
          new Map({
            id: id1,
            type: 'color-sets',
            attributes: new Map({
              background: color1,
              button: color1,
              circle: color1
            })
          }),
          new Map({
            id: id2,
            type: 'color-sets',
            attributes: new Map({
              background: color2,
              button: color2,
              circle: color2
            })
          })
        ]
      };

      const projects = {
        data: [],
        included: [
          {
            id: id1,
            type: 'color-sets',
            attributes: {
              background: color1,
              button: color1,
              circle: color1
            }
          },
          {
            id: id2,
            type: 'color-sets',
            attributes: {
              background: color2,
              button: color2,
              circle: color2
            }
          }
        ]
      };
      const action = {
        type: PROJECTS_FETCHED_SUCCESS,
        projects: projects
      };
      const stateAfter = new Map({
        projects: new List(expectedProjects.data),
        colorSets: new List([
          expectedProjects.included[0],
          expectedProjects.included[1]
        ])
      });

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
