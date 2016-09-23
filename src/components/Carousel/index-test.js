import { Carousel } from './index.js';

describe('Carousel', () => {
  let carousel;

  before(() => {
    carousel = new Carousel();
  });

  describe('handleChange', () => {
    let setSlideIndex;

    before(() => {
      carousel.props = {
        setSlideIndex: () => {
          return;
        }
      };

      setSlideIndex = spy(carousel.props, 'setSlideIndex');
    });

    it('calls setSlideIndex', () => {
      carousel.handleChange();
      expect(setSlideIndex.calledOnce).to.be.true;
    });

    afterEach(() => {
      setSlideIndex.restore();
    });
  });
});
