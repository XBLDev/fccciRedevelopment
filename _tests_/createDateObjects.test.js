import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import moment from 'moment';

import { shallow } from 'enzyme';
// import { Simulate } from 'react-addons-test-utils';

import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';
import Adapter from 'enzyme-adapter-react-16';
const createDateObjects = require('../node_modules/react-calendar-component/lib/createDateObjects');
// import createDateObjects from '../node_modules/react-calendar-component/src/createDateObjects.js';

// const sum = require('./sum');

configure({ adapter: new Adapter() });
global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
test('createDateObjects test', () => {
    // console.log(createDateObjects['default'](moment(), 0, '', 'Eng'));
    expect(createDateObjects['default'](moment(), 0, '', 'Eng').length < 30).toBe(false);
    // console.log(createDateObjects(moment(), 0, '', 'Eng'));
});

















// 'use strict';

// var _moment = require('moment');

// var _moment2 = _interopRequireDefault(_moment);

// var _createDateObjects = require('../node_modules/react-calendar-component/lib/_test_/createDateObjects');

// var _createDateObjects2 = _interopRequireDefault(_createDateObjects);

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// it('createDateObjects', function () {
//   for (var month = 0; month < 12; month++) {
//     var date = _moment2.default.utc([2016, month, 1]);
//     expect((0, _createDateObjects2.default)(date)).toMatchSnapshot();
//   }
// });