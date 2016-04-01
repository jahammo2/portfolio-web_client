import { expect } from 'chai';
import { createElement } from 'react';
import CustomPropTypes from './CustomPropTypes';

describe('CustomPropTypes', () => {
  describe('children', () => {
    it('throws an error if not passed any arguments', () => {
      function noChild() {
        return CustomPropTypes.children();
      }

      expect(noChild).to.throw(Error);
    });

    it('does not throw an error if passed an array', () => {
      function arrayChild() {
        return CustomPropTypes.children([]);
      }

      expect(arrayChild).to.not.throw(Error);
    });

    it('does not throw an error if passed an element', () => {
      function elementChild() {
        return CustomPropTypes.children(createElement('div'));
      }

      expect(elementChild).to.not.throw(Error);
    });
  });
});
