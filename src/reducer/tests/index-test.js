import reducer from '../index';

describe('draftQuotesReducer', () => {
  const initialState = new Map({
    projects: new List([]),
    colorSets: new List([]),
    languages: new List([]),
    devices: new List([]),
    activeProject: new Map()
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
});
