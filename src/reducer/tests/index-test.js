import reducer from '../index';
import Immutable from 'immutable';

const List = Immutable.List;
const Map = Immutable.Map;

export const initialState = new Map({
  projects: new List([]),
  individualProject: new Map(),
  colorSets: new List([]),
  screenshots: new List([]),
  languages: new List([]),
  devices: new List([]),
  activeProject: new Map(),
  sideBarShowing: false,
  socialLinks: new List([]),
  bio: new Map()
});

describe('reducer', () => {
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
});
