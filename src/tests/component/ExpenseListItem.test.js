import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/expenseListItem";
import myExpenses from "../fixture/myexpenses";

test('should test the expense item ', () => {
    const wrapper = shallow(< ExpenseListItem {...myExpenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})
