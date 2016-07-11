import { SocialLinks } from './index';

describe('SocialLinks', () => {
  describe('componentWillMount', () => {
    let socialLinks;
    let fetchSocialLinks;

    before(() => {
      socialLinks = new SocialLinks();
      socialLinks.props = {
        fetchSocialLinks: () => {
          return;
        }
      };

      fetchSocialLinks = spy(socialLinks.props, 'fetchSocialLinks');
    });

    it('calls fetchSocialLinks', () => {
      socialLinks.componentWillMount();
      expect(fetchSocialLinks.calledOnce).to.be.true;
    });

    afterEach(() => {
      fetchSocialLinks.restore();
    });
  });
});
