import React from 'react';
import SideBar from './index';
import faker from 'faker';
import { renderIntoDocument } from 'react-addons-test-utils';
// import { List } from 'immutable';
import Immutable from 'immutable';
import {expect} from 'chai';

describe('SideBar', () => {
  describe('getProjects', () => {
    let foo;
    let getProjects;
    let sideBar;
    let expectedProject;

    before(() => {
      expectedProject = new Immutable.List([{
        id: faker.random.number(),
        title: faker.random.word(),
        github_page_url: faker.internet.url(),
        web_page_url: faker.internet.url(),
        body: faker.lorem.sentences(),
        description: faker.lorem.sentence(),
        date_deployed: '2016-03-13 20:45:16'
      }]);

      sideBar = new SideBar();
      sideBar.props = {projects: expectedProject};
      console.log("SECOND");
    });

    beforeEach(() => {
      getProjects = sideBar.getProjects();
    });

    it('returns the props projects as an Immutable List', () => {
      expect(getProjects).to.equal(expectedProject);
    });
  });
});
