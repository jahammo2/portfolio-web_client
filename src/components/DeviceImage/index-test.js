import DeviceImage from './index';
import laptop from '../../img/laptop.png';

describe('DeviceImage', () => {
  let deviceImage;

  describe('chooseImage', () => {
    let chooseImage;

    before(() => {
      deviceImage = new DeviceImage();
      deviceImage.props = {
        device: 'laptop'
      };
    });

    beforeEach(() => {
      chooseImage = deviceImage.chooseImage();
    });

    it('returns the corresponding props device', () => {
      expect(chooseImage).to.deep.eq(laptop);
    });
  });
});
