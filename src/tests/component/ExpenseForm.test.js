import React from "react";
import { shallow } from "enzyme";
import myExpenses from "../fixture/myexpenses";
import ExpenseForm from "../../components/expenseForm";
import moment from "moment";

test('should render the expense form coreclly', () => {
    const wrapper = shallow(< ExpenseForm / >)
    expect(wrapper).toMatchSnapshot()
})

test('should render the expense form coreclly with expense data', () => {
    const wrapper = shallow(< ExpenseForm expense={myExpenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})




test('should render the error for invalid form submission', () => {
    const wrapper = shallow(< ExpenseForm />)
    wrapper.find(`form`).simulate(`submit`, {
        preventDefault: () => { }
    })
    expect(wrapper.state(`error`).length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should render the newe value of changing description', () => {
    const value = `New description`
    const wrapper = shallow(< ExpenseForm />)
    wrapper.find(`input`).at(0).simulate(`change`, {
        target:{value}
    })
    expect(wrapper.state(`description`)).toBe(value)
    
})

test('should render the newe value of changing note', () => {
    const value = `New note`
    const wrapper = shallow(< ExpenseForm />)
    wrapper.find(`textarea`).at(0).simulate(`change`, {
        target: { value }
    })
    expect(wrapper.state(`note`)).toBe(value)
})

test('should render the newe value of changing amount', () => {
    const value = `25`
    const wrapper = shallow(< ExpenseForm />)
    wrapper.find(`input`).at(1).simulate(`change`, {
        target: { value }
    })
    expect(wrapper.state(`amount`)).toBe(value)
})

test('should render the newe value of changing amount', () => {
    const value = `25.6`
    const wrapper = shallow(< ExpenseForm />)
    wrapper.find(`input`).at(1).simulate(`change`, {
        target: { value }
    })
    expect(wrapper.state(`amount`)).toBe(value)
})


// spy function in jest : is a fake function we can call and we can acces to if we called him or not and how many times we have called him 
// note that if we have one spy function and we dont use it it will give an error 
// create fake function => pase to the componenet => make sure that we call as we need 
test('should call onSubmit prop for a valid data  ', () => {
    const onSubmitSpy = jest.fn() // we will use it to simulate the needed object 
    // here we dont have getExpense function so we need to use a spy function
    const wrapper = shallow(< ExpenseForm expense={myExpenses[0]} getTheExpense={onSubmitSpy}  />) 
    wrapper.find(`form`).simulate(`submit`, {
        preventDefault: () => { }
    })
    expect(wrapper.state(`error`)).toBe(``)
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: myExpenses[0].description,
        amount: myExpenses[0].amount,
        createdAt: myExpenses[0].createdAt,
        note: myExpenses[0].note
    })
})

// test('should set new date on date change', () => {
//     const now = moment();
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('#500').prop('onDateChange')(1000);
//     expect(wrapper.state('createdAt')).toEqual(1000);
// });

// test('should set calendar focus on change', () => {
//   const focused = true;
//   const wrapper = shallow(<ExpenseForm />);
//   wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
//   expect(wrapper.state('calendarFocused')).toBe(focused);
// });
