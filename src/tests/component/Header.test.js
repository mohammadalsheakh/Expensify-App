import Header from "../../components/Header";
import React from 'react';
import {shallow} from "enzyme"
// import toJson from "enzyme-to-json";
// import ReactShallowRenderer from 'react-test-renderer/shallow';

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });


test('should render Header correctly', () => {
    const wraper = shallow(<Header />) //here we pass the jsx we need to render or we need to test 
    expect(wraper).toMatchSnapshot()



    // expect(toJson(wraper)).toMatchSnapshot()
    // expect(wraper.find(`h1`).length).toBe(1)
    // expect(wraper.find(`h1`).text()).toBe(`Expensify`)
    
});
