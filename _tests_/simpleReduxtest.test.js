import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import setAllPhotos from '../client/src/components/counter.js';

import SET_ALLPHOTOS from '../client/src/components/counter.js';
import SET_TOTAL from '../client/src/components/counter.js';
import LOADING_FINISHED from '../client/src/components/counter.js';
import INCREMENT_TIMER from '../client/src/components/counter.js';
import { combineReducers } from 'redux'


import setAllPhotosFunc from '../client/src/components/counter.js';
import counter from '../client/src/components/counter.js';

configure({ adapter: new Adapter() });
global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};


const initialState = {
  // timerFunction: null,
//   count: 0,
  totalPhotoNum: -1,
  timer: 0,
  loading: true,
  allGalaryPhotos: []
  // timerIncrementing: false
}


test('simple Redux action creator test', () => {
    const URLS = ['image1','image2'];
    // console.log(counter);
//     var tempReducer = combineReducers({
// //   router: routerReducer,
//         counter
//     });
    console.log(setAllPhotos);

    const expectedAction = {
      type: SET_ALLPHOTOS,
      URLS
    }
    // expect(counter()).toEqual(initialState)
    // expect(tempReducer()).toEqual(expectedAction)
});