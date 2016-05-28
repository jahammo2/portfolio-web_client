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
    it('sets languages and devices', () => {
      const id1 = faker.random.number();
      const id2 = faker.random.number();
      const language = `${faker.internet.protocol()} language`;
      const device = faker.internet.protocol();

      const expectedProjects = {
        data: new List([]),
        colorSets: new List([]),
        included: [
          new Map({
            id: id1,
            type: 'languages',
            attributes: new Map({
              title: language
            })
          }),
          new Map({
            id: id2,
            type: 'devices',
            attributes: new Map({
              title: device
            })
          })
        ]
      };

      const projects = {
        data: [],
        included: [
          {
            id: id1,
            type: 'languages',
            attributes: {
              title: language
            }
          },
          {
            id: id2,
            type: 'devices',
            attributes: {
              title: device
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
        colorSets: new List([]),
        languages: new List([
          expectedProjects.included[0]
        ]),
        devices: new List([
          expectedProjects.included[1]
        ]),
        activeProject: new Map()
      });

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});

