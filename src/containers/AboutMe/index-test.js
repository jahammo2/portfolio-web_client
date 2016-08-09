import { AboutMe } from './index.js';

describe('AboutMe', () => {
  let aboutMe;

  before(() => {
    aboutMe = new AboutMe();
  });

  describe('componentWillMount', () => {
    let fetchBio;

    before(() => {
      aboutMe.props = {
        fetchBio: () => {
          return;
        }
      };

      fetchBio = spy(aboutMe.props, 'fetchBio');
    });

    it('calls fetchBio', () => {
      aboutMe.componentWillMount();
      expect(fetchBio.calledOnce).to.be.true;
    });

    afterEach(() => {
      fetchBio.restore();
    });
  });
});
