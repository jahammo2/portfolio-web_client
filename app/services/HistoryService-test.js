import { expect } from 'chai';
import * as history from 'history';
import { stub } from 'sinon';
import { getHistory } from './HistoryService';

describe('getHistory', () => {
  const expectedHashHistory = {};
  let createHashHistory;

  before(() => {
    createHashHistory = stub(history, 'createHashHistory').returns(expectedHashHistory);
  });

  it('returns a hash history object', () => {
    const hashHistory = getHistory();
    expect(hashHistory).to.equal(expectedHashHistory);
  });

  it('always returns the same hash history object', () => {
    const hashHistory1 = getHistory();
    const hashHistory2 = getHistory();
    expect(hashHistory1).to.equal(hashHistory2);
  });

  afterEach(() => {
    createHashHistory.reset();
  });

  after(() => {
    createHashHistory.restore();
  });
});
