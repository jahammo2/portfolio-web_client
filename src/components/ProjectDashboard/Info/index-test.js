import { Info } from './index';

describe('Info', () => {
  let info;
  let buttonColor;

  beforeEach(() => {
    info = new Info();
    buttonColor = stub(info, 'getBackgroundColor').returns('foo');
  });

  describe('infoStyles', () => {
    let infoStyles;

    it('returns black if being hovered', () => {
      info.state = { hover: true };
      infoStyles = info.infoStyles();
      expect(infoStyles).to.deep.eq({ background: '#222' });
    });

    it('returns the button color if not being hovered', () => {
      info.state = { hover: false };
      infoStyles = info.infoStyles();
      expect(infoStyles).to.deep.eq({ background: 'foo' });
    });
  });

  describe('toggleHover', () => {
    let setState;

    beforeEach(() => {
      setState = spy(info, 'setState');
    });

    it('sets the hover state to the opposite of the last hover state', () => {
      info.state = { hover: false };
      info.toggleHover();

      expect(setState.calledWith({ hover: true })).to.be.true;
    });

    afterEach(() => {
      setState.restore();
    });
  });

  afterEach(() => {
    buttonColor.restore();
  });
});
