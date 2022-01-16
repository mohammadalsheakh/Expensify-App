import React from "react";
import { shallow } from "enzyme";
import { ExpensesList } from "../../components/expenselist";
import myExpenses from "../fixture/myexpenses";


test('should render the exoense list with expenses', () => {
    const wraper = shallow(< ExpensesList expense={myExpenses} />)
    expect(wraper).toMatchSnapshot()
})

test('should render when there is no expenses', () => {
    const wraper = shallow(< ExpensesList expense={[]} />)
    expect(wraper).toMatchSnapshot()
})

