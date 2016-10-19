import DeviceImage from './index';
import laptop from '../../img/laptop.png';

describe('DeviceImage', () => {
  let deviceImage;
  let device;

  describe('componentWillMount', () => {
    let setState;

    before(() => {
      deviceImage = new DeviceImage();
      deviceImage.props = {
        device: 'foo'
      };
      setState = spy(deviceImage, 'setState');
    });

    beforeEach(() => {
      deviceImage.componentWillMount();
    });

    it('calls setState', () => {
      expect(setState.calledWith({ showing: 'foo' })).to.be.true;
    });
  });

  describe('componentWillReceiveProps', () => {
    let props;
    let windowSpy;

    before(() => {
      deviceImage = new DeviceImage();
      device = 'mobile';
      props = {
        device: device
      };
      deviceImage.props = props;
      deviceImage.state = {
        showing: 'desktop'
      };
      windowSpy = spy(global, 'setTimeout');
    });

    beforeEach(() => {
      deviceImage.componentWillReceiveProps(props);
    });

    it('calls setTimeout when the props device is not what the state is showing', () => {
      expect(windowSpy.calledOnce).to.be.true;
    });
  });

  describe('chooseImage', () => {
    let chooseImage;

    before(() => {
      device = 'desktop';
      deviceImage = new DeviceImage();
    });

    beforeEach(() => {
      chooseImage = deviceImage.chooseImage(device);
    });

    it('returns the corresponding props device', () => {
      expect(chooseImage).to.deep.eq(laptop);
    });
  });
});
