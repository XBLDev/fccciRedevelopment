import RightSideMenuItem from '../client/src/components/RightSideMenuItem.jsx';
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';
// import { Simulate } from 'react-addons-test-utils';

import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';
import Adapter from 'enzyme-adapter-react-16';

// import { Simulate } from 'react-addons-test-utils'

configure({ adapter: new Adapter() });

global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
  };
// configure({ adapter: new Adapter() });

// const sum = require('./sum');
// const React = require('react');
// const Enzyme = require('enzyme');
// const Adapter = require('enzyme/Adapter');

// jest.unmock('../client/src/components/RightSideMenuItem.jsx');
// const RightSideMenuItem = require('../client/src/components/RightSideMenuItem.jsx');
// Enzyme.configure({ adapter: new Adapter() });


test('RightSideMenuItem component renders a link that has ', () => {
    // console.log('test for RightSideMenuItem begins');
    const wrapper = mount(
        <div>
        <BrowserRouter
        basename="/"
        >        
            <RightSideMenuItem newsTitle={'news1'} newsNumber={1} />
        </BrowserRouter>
        </div>
    );

    // const rendered = renderer.create(
    //     <div>
    //     <BrowserRouter
    //     basename="/"
    //     >        
    //         <RightSideMenuItem newsTitle={'news1'} newsNumber={1} />
    //     </BrowserRouter>
    //     </div>

    // );
    // const wrapper = shallow(        
    //     <div>
    //     <BrowserRouter>        
    //         <RightSideMenuItem newsTitle={'news1'} newsNumber={1} />
    //     </BrowserRouter>
    //     </div>
    // );                                                              
    
    wrapper.find('Link').simulate('click');
    // console.log('link: ', wrapper.find('Link').text());
    // console.log(wrapper.find('centerAreaRightItem'));//<------undefined

    // expect(wrapper.find('centerAreaRightItem').innerHTML.match()


    // expect(rendered.toJSON()).toMatchSnapshot();
    
    expect(wrapper.contains(
    <Link to={"/Newsboard/news1"}>news1</Link>
    )).toBe(true);
    // expect(window.location).toBe(null);
    // const p = wrapper.find('.centerAreaRightItem');
    // // const linkto = wrapper.find('.centerAreaRightItem');

    // const link = p.find('Link');
    // const to = link.find({prop: 'to'});
    // console.log('link: ', link.text());
    // console.log(to.text());
    // expect(p.text()).toBe('news1');
    // console.log(p.text());
});