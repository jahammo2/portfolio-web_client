import Header from './index';

describe('Header', () => {
  let header;

  describe('iconClassName', () => {
    let iconClassName;

    before(() => {
      header = new Header();
      header.props = {
        sideBarShowing: true
      };
    });

    beforeEach(() => {
      iconClassName = header.iconClassName();
    });

    it('returns times if true', () => {
      expect(iconClassName).to.equal('times');
    });
  });
});
