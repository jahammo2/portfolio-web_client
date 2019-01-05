import chai from 'chai';
import Immutable from 'immutable';
import chaiImmutable from 'chai-immutable';
import faker from 'faker';
import { JSDOM } from 'jsdom';
import sinon from 'sinon';
import Slider from 'react-slick';

const { document } = (new JSDOM('')).window;
const win = document.defaultView;

chai.use(chaiImmutable);

global.document = document;
global.window = win;
global.List = Immutable.List;
global.Map = Immutable.Map;
global.fromJS = Immutable.fromJS;
global.expect = chai.expect;
global.faker = faker;
global.spy = sinon.spy;
global.stub = sinon.stub;
global.Slider = Slider;

// Object.keys(window).forEach((key) => {
//   if (!(key in global)) {
//     global[key] = window[key];
//   }
// });
