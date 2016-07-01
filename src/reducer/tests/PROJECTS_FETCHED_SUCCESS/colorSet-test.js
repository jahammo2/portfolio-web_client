import reducer from '../../index';
import { PROJECTS_FETCHED_SUCCESS } from '../../../constants/actionTypes';

describe('reducer', () => {
  const initialState = new Map({
    projects: new List([]),
    colorSets: new List([]),
    languages: new List([]),
    devices: new List([]),
    activeProject: new Map()
  });

  describe('action PROJECTS_FETCHED_SUCCESS', () => {
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
        languages: new List([]),
        devices: new List([]),
        colorSets: new List([
          expectedProjects.included[0],
          expectedProjects.included[1]
        ]),
        activeProject: new Map()
      });

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
