import chai from 'chai';
import Immutable from 'immutable';
import chaiImmutable from 'chai-immutable';
import faker from 'faker';
import jsdom from 'jsdom';
import sinon from 'sinon';
import Slider from 'react-slick';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

chai.use(chaiImmutable);

global.document = doc;
global.window = win;
global.List = Immutable.List;
global.Map = Immutable.Map;
global.fromJS = Immutable.fromJS;
global.expect = chai.expect;
global.faker = faker;
global.spy = sinon.spy;
global.stub = sinon.stub;
global.Slider = Slider;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
