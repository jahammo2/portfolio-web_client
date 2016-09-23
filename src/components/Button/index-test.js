import { Button } from './index';

describe('Button', () => {
  let button;
  let buttonColor;

  beforeEach(() => {
    button = new Button();
    buttonColor = stub(button, 'getColorForStyle');
    buttonColor.withArgs('button_hover').returns('baz');
    buttonColor.withArgs('button').returns('foo');
  });

  describe('buttonStyles', () => {
    let buttonStyles;

    it('returns the button_hover color if being hovered', () => {
      button.state = { hover: true };
      buttonStyles = button.buttonStyles();
      expect(buttonStyles).to.deep.eq({ background: 'baz' });
    });

    it('returns the button color if not being hovered', () => {
      button.state = { hover: false };
      buttonStyles = button.buttonStyles();
      expect(buttonStyles).to.deep.eq({ background: 'foo' });
    });
  });

  describe('toggleHover', () => {
    let setState;

    beforeEach(() => {
      setState = spy(button, 'setState');
    });

    it('sets the hover state to the opposite of the last hover state', () => {
      button.state = { hover: false };
      button.toggleHover();

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
