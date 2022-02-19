import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/loginPage";

test('should render the login page', () => { 
    const action = shallow(< LoginPage />)
    expect(action).toMatchSnapshot()
})