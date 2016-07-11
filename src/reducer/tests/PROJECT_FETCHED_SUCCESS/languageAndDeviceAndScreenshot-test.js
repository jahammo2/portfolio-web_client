import reducer from '../../index';
import { PROJECT_FETCHED_SUCCESS } from '../../../constants/actionTypes';
import { initialState } from '../index-test';

describe('reducer', () => {
  describe('action PROJECT_FETCHED_SUCCESS', () => {
    it('sets languages, devices, and screenshots', () => {
      const id1 = faker.random.number();
      const id2 = faker.random.number();
      const id3 = faker.random.number();
      const language = `${faker.internet.protocol()} language`;
      const device = faker.internet.protocol();
      const screenshot = faker.internet.url();

      const expectedProject = {
        data: new Map(),
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
          }),
          new Map({
            id: id3,
            type: 'screenshots',
            attributes: new Map({
              image: screenshot
            })
          })
        ]
      };

      const project = {
        data: {},
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
          },
          {
            id: id3,
            type: 'screenshots',
            attributes: {
              image: screenshot
            }
          }
        ]
      };

      const action = {
        type: PROJECT_FETCHED_SUCCESS,
        project: project
      };

      const stateAfter = initialState.set('languages', new List([expectedProject.included[0]]))
        .set('devices', new List([expectedProject.included[1]]))
        .set('screenshots', new List([expectedProject.included[2]]))
        .set('individualProject', expectedProject.data);

      expect(stateAfter).to.eql(reducer(initialState, action));
    });
  });
});
