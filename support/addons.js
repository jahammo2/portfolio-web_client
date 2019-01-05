const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

chai.use(chaiAsPromised);

Enzyme.configure({ adapter: new Adapter() });
