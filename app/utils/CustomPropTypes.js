import { PropTypes } from 'react';

const CustomPropTypes = {
  children: function(...args) {
    const isArray = !PropTypes.array.isRequired.apply(this, args);
    const isElement = !PropTypes.element.isRequired.apply(this, args);

    if (!(isArray || isElement)) {
      return new Error('Expected `array` or `element` to be supplied to `Form`.');
    }
  }
};

export default CustomPropTypes;
