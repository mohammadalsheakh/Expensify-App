import PageNotFound from '../../components/notfound';
import React from 'react';
import { shallow } from "enzyme"



test('should render Header correctly', () => {
    const wraper = shallow(< PageNotFound />) //here we pass the jsx we need to render or we need to test 
    expect(wraper).toMatchSnapshot()
});
