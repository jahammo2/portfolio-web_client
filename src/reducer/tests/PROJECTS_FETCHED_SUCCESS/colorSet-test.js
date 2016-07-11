import reducer from '../../index';
import { PROJECTS_FETCHED_SUCCESS } from '../../../constants/actionTypes';
import { initialState } from '../index-test';

describe('reducer', () => {
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

      const stateAfter = initialState.set('projects', new List(expectedProjects.data))
        .set('colorSets', new List([
          expectedProjects.included[0],
          expectedProjects.included[1]
        ]));

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
