const chai = require('chai');
const faker = require('faker');
const { JSDOM } = require('jsdom');
const sinon = require('sinon');
const Slider = require('react-slick');
const { document } = (new JSDOM('')).window;
const window = document.defaultView;

window.fetch = () => {
  return new Promise;
};

global.document = document;
global.window = window;
global.expect = chai.expect;
global.faker = faker;
global.spy = sinon.spy;
global.stub = sinon.stub;
global.Slider = Slider;
