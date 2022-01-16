import React from "react";
import { shallow } from "enzyme";
import { AddExpense } from "../../components/addExpense";

test('should render add expense correctlly', () => {
    const onDispatch = jest.fn()
    const wrapper = shallow(<AddExpense onDispatch={onDispatch} />)
    expect(wrapper).toMatchSnapshot()
})



let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});
