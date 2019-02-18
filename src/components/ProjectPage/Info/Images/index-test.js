import { Images } from './index.js';

describe('Images', () => {
  let images;
  let index;
  let setState;

  before(() => {
    images = new Images();
    images.state = {
      slideIndex: 0
    };
    index = 10;
  });

  beforeEach(() => {
    setState = spy(images, 'setState');
  });

  describe('setSlideIndex', () => {
    it('sets the slideIndex state', () => {
      images.setSlideIndex(index);
      expect(setState.calledWith({ slideIndex: index })).to.be.true;
    });
  });

  afterEach(() => {
    setState.restore();
  });
});
