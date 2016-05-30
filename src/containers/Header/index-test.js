import React from 'react';
import ReactDOM from 'react-dom';
import Header from './index';
import {
  renderIntoDocument,
  Simulate
} from 'react-addons-test-utils';
import * as ActionCreators from '../../actions/PortfolioActions';

describe('Header', () => {
  let component;

  describe('displayMenu', () => {
    let sideBarShown;

    before(() => {
      sideBarShown = spy(ActionCreators, 'sideBarShown');
    });

    beforeEach(() => {
      component = renderIntoDocument(
        <Header
          sideBarShown={ActionCreators.sideBarShown}
        />
      );

      Simulate.click(ReactDOM.findDOMNode(component.refs.sideBarShown));
    });

    it('calls sideBarShown on clicking of menu', () => {
      expect(sideBarShown.calledOnce).to.be.true;
    });

    afterEach(() => {
      sideBarShown.reset();
    });

    after(() => {
      sideBarShown.restore();
    });
  });
});
