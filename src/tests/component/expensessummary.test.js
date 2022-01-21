import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummury } from "../../components/expensesSummury";
import myExpenses from "../fixture/myexpenses";


test('should correclly render expense summary with one expense', () => {
    const wrapper = shallow(< ExpensesSummury expenseCount={1} expenseTotal={461} />)
    expect(wrapper).toMatchSnapshot()
});


test('should correclly render expense summary with multi expenses', () => {
    const wrapper = shallow(< ExpensesSummury expenseCount={23} expenseTotal={598} />)
    expect(wrapper).toMatchSnapshot()
});
