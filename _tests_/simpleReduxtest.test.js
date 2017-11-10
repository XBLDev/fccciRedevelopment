import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import setAllPhotos from '../client/src/components/counter.js';
import setAllPhotosTEST from '../client/src/components/counter.js';

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

describe('Redux simple test', () => {
  it('test reducer: test that output is as expected given input', () => {
    //CODE BASED ON: https://github.com/Gethyl/ReactReduxTestingUsingJestEnzyme
    let state = {
      totalPhotoNum: -1,
      timer: 0,
      loading: true,
      allGalaryPhotos: []
    }

    // let state = {output:100}
    state = counter(state,{type:"counter/SET_TOTAL",value:50})
    expect(state).toEqual({totalPhotoNum: 50, timer: 0, loading: true, allGalaryPhotos: []})
    state = counter(state,{type:"counter/SET_ALLPHOTOS",value:['image1','image2']})
    expect(state).toEqual({totalPhotoNum: 50, timer: 0, loading: true, allGalaryPhotos: ['image1','image2']})
    state = counter(state,{type:"counter/LOADING_FINISHED"})
    expect(state).toEqual({totalPhotoNum: 50, timer: 0, loading: false, allGalaryPhotos: ['image1','image2']})
    state = {
      totalPhotoNum: 50,
      timer: 49,
      loading: false,
      allGalaryPhotos: ['image1','image2']
    }
    state = counter(state,{type:"counter/INCREMENT_TIMER"})
    expect(state).toEqual({totalPhotoNum: 50, timer: 0, loading: false, allGalaryPhotos: ['image1','image2']})
    

  })
})

// test('simple Redux action creator test', () => {
//     const URLS = ['image1','image2'];
//     // console.log(counter);
// //     var tempReducer = combineReducers({
// // //   router: routerReducer,
// //         counter
// //     });
//     // console.log(setAllPhotos);
//     // console.log(setAllPhotosFunc(URL));

//     const expectedAction = {
//       "type": SET_ALLPHOTOS,
//       URLS
//     }
//     // expect(counter()).toEqual(initialState)
//     expect(setAllPhotosFunc(URL, SET_ALLPHOTOS)).toEqual(expectedAction)
// });