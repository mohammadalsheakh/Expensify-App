import EditDashbord from '../../components/expenseDashpord';
import React from 'react';
import { shallow } from "enzyme"

test('should render Header correctly', () => {
    const wraper = shallow(<EditDashbord />) //here we pass the jsx we need to render or we need to test 
    expect(wraper).toMatchSnapshot()
});
