import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import faker from 'faker';
import jsdom from 'jsdom';

chai.use(chaiImmutable);

// Node doesn't have sessionStorage, so shim it out so we can run our tests
let sessionStorageData = {};
global.sessionStorage = {
  clear: function() { sessionStorageData = {}; },
  getItem: function(key) { return sessionStorageData[key] || null; },
  setItem: function(key, value) { sessionStorageData[key] = value; },
  removeItem: function(key) { delete sessionStorageData[key]; }
};

global.navigator = {
  userAgent: 'node.js'
};

global.document = jsdom.jsdom('<!doctype html><html><body><div id="chart"></div></body></html>');
global.window = document.defaultView;
global.MG = {version: '2.8.0'};

global.location = {
  host: faker.internet.domainName(),
  protocol: `${faker.internet.protocol()}:`
};
