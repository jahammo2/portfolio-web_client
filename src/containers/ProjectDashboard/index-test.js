import React from 'react';
import ReactDOM from 'react-dom';
import ProjectDashboard from './index';
import {
  renderIntoDocument,
  Simulate
} from 'react-addons-test-utils';

describe('ProjectDashboard', () => {
  describe('getBackground', () => {
    let projectDashboard;
    let getBackground;
    let component;
    const color1 = faker.internet.color();
    const color2 = faker.internet.color();

    const project = fromJS({
      id: faker.random.number(),
      attributes: {
        title: faker.random.word(),
        github_page_url: faker.internet.url(),
        web_page_url: faker.internet.url(),
        body: faker.lorem.sentences(),
        description: faker.lorem.sentence(),
        date_deployed: '2016-03-13 20:45:16'
      },
      relationships: {
        color_set: {
          data: {
            type: 'color-sets',
            id: 19
          }
        }
      }
    });

    const colorSets = new List([
      new Map({
        id: 19,
        type: 'color-sets',
        attributes: new Map({
          background: color1,
          button: color1,
          circle: color1
        })
      }),
      new Map({
        id: 20,
        type: 'color-sets',
        attributes: new Map({
          background: color2,
          button: color2,
          circle: color2
        })
      })
    ]);

    before(() => {
      projectDashboard = new ProjectDashboard();
    });

    beforeEach(() => {
      projectDashboard.props = {
        project: project,
        colorSets: colorSets
      };

      getBackground = projectDashboard.getBackground();
    });

    it('returns color1', () => {
      expect(getBackground).to.equal(color1);
    });
  });
});
