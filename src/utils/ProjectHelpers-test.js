import * as ProjectHelpers from './ProjectHelpers';
import { fromJS, List, Map } from 'immutable';

describe('ProjectHelpers', () => {
  const device1 = 'mobile';
  const device2 = 'desktop';
  const device3 = 'tablet';
  const language1 = 'javascript';
  const language2 = 'react';
  const language3 = 'css';

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
      devices: {
        data: [
          {
            type: 'devices',
            id: 19
          },
          {
            type: 'devices',
            id: 21
          }
        ]
      },
      languages: {
        data: [
          {
            type: 'languages',
            id: 19
          },
          {
            type: 'languages',
            id: 21
          }
        ]
      }
    }
  });

  const devices = new List([
    new Map({
      id: 19,
      type: 'devices',
      attributes: new Map({
        title: device1
      })
    }),
    new Map({
      id: 20,
      type: 'devices',
      attributes: new Map({
        title: device2
      })
    }),
    new Map({
      id: 21,
      type: 'devices',
      attributes: new Map({
        title: device3
      })
    })
  ]);

  const languages = new List([
    new Map({
      id: 19,
      type: 'languages',
      attributes: new Map({
        title: language1
      })
    }),
    new Map({
      id: 20,
      type: 'languages',
      attributes: new Map({
        title: language2
      })
    }),
    new Map({
      id: 21,
      type: 'languages',
      attributes: new Map({
        title: language3
      })
    })
  ]);

  describe('getColor', () => {
    const color1 = faker.internet.color();
    const color2 = faker.internet.color();

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

    const projectWithColors = fromJS({
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

    it('returns the color needed', () => {
      const getColor = ProjectHelpers.getColor(
        projectWithColors,
        colorSets,
        'background'
      );

      expect(getColor).to.equal(color1);
    });
  });

  describe('getIncludedObjectTitles', () => {
    it('returns a list of device titles for that project', () => {
      const getDevices = ProjectHelpers.getIncludedObjectTitles(
        project,
        devices,
        'devices'
      );
      const expectedDevices = new List([device1, device3]);

      expect(getDevices.toJS()).to.deep.equal(expectedDevices.toJS());
    });

    it('returns a list of language titles for that project', () => {
      const getLanguages = ProjectHelpers.getIncludedObjectTitles(
        project,
        languages,
        'languages'
      );
      const expectedLanguages = new List([language1, language3]);

      expect(getLanguages.toJS()).to.deep.equal(expectedLanguages.toJS());
    });
  });

  describe('getIncludedObjects', () => {
    it('returns a list of devices for that project', () => {
      const getDevices = ProjectHelpers.getIncludedObjects(
        project,
        devices,
        'devices'
      );
      const expectedDevices = new List([devices.first(), devices.last()]);

      expect(getDevices.toJS()).to.deep.equal(expectedDevices.toJS());
    });

    it('returns a list of languages for that project', () => {
      const getLanguages = ProjectHelpers.getIncludedObjects(
        project,
        languages,
        'languages'
      );
      const expectedLanguages = new List([languages.first(), languages.last()]);

      expect(getLanguages.toJS()).to.deep.equal(expectedLanguages.toJS());
    });
  });

  describe('getSisterProject', () => {
    const projects = new List([
      new Map({
        id: faker.random.number(),
        attributes: new Map({
          title: faker.random.word(),
          github_page_url: faker.internet.url(),
          web_page_url: faker.internet.url(),
          body: faker.lorem.sentences(),
          description: faker.lorem.sentence(),
          date_deployed: '2016-03-13 20:45:16'
        })
      }),
      new Map({
        id: faker.random.number(),
        attributes: new Map({
          title: faker.random.word(),
          github_page_url: faker.internet.url(),
          web_page_url: faker.internet.url(),
          body: faker.lorem.sentences(),
          description: faker.lorem.sentence(),
          date_deployed: '2016-03-13 20:45:16'
        })
      }),
      new Map({
        id: faker.random.number(),
        attributes: new Map({
          title: faker.random.word(),
          github_page_url: faker.internet.url(),
          web_page_url: faker.internet.url(),
          body: faker.lorem.sentences(),
          description: faker.lorem.sentence(),
          date_deployed: '2016-03-13 20:45:16'
        })
      })
    ]);

    const getSisterProject = ProjectHelpers.getSisterProject;

    it('returns the next project if +1', () => {
      const sisterProject = getSisterProject(1, projects, projects.get(1));
      expect(sisterProject).to.equal(projects.get(2));
    });

    it('returns the previous project if -1', () => {
      const sisterProject = getSisterProject(-1, projects, projects.get(1));
      expect(sisterProject).to.equal(projects.get(0));
    });

    it('returns the first project if +1 and the last project is the current project', () => {
      const sisterProject = getSisterProject(1, projects, projects.get(2));

      expect(sisterProject).to.equal(projects.get(0));
    });
  });
});
