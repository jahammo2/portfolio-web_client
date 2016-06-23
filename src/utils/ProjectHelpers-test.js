import * as ProjectHelpers from './ProjectHelpers';

describe('ProjectHelpers', () => {
  describe('getColor', () => {
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

    it('returns the color needed', () => {
      const getColor = ProjectHelpers.getColor(
        project,
        colorSets,
        'background'
      );

      expect(getColor).to.equal(color1);
    });
  });

  describe('getIncludedObjects', () => {
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

    it('returns a list of devices for that project', () => {
      const getDevices = ProjectHelpers.getIncludedObjects(
        project,
        devices,
        'devices'
      );

      expect(getDevices).to.equal(new List([device1, device3]));
    });

    it('returns a list of languages for that project', () => {
      const getLanguages = ProjectHelpers.getIncludedObjects(
        project,
        languages,
        'languages'
      );

      expect(getLanguages).to.equal(new List([language1, language3]));
    });
  });
});
