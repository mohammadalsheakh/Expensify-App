import React from "react";
import { shallow } from "enzyme";
import { ExpenseDashPordFilter } from "../../components/expenseDashPordFilter";
import { RealFilter, defualFilter } from "../fixture/myFilter";
import moment from "moment";


let setEndDate, setStartDate, setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
    setEndDate = jest.fn()
    setStartDate = jest.fn()
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    wrapper = shallow(<
        ExpenseDashPordFilter
        filterValue={defualFilter}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
    />)
    
})

test('should render the defualt list filter ', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render the real list filter ', () => { //here we have just to change the defual to the real so :
// we can do that by redclearing the wrapper or we can use a new method in jest called 
    wrapper.setProps({ filterValue: RealFilter });
    expect(wrapper).toMatchSnapshot()
})


test('should handel text change ', () => {
    const value = `our new value`
    wrapper.find(`input`).simulate(`change`, {
        target: { value }
    })

    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})


test('should handel the sort by date ', () => {
    const value = `date`
    wrapper.setProps({ filterValue: RealFilter });
    wrapper.find(`select`).simulate(`change`, {
        target: { value }
    })

    expect(sortByDate).toHaveBeenCalled()
})

test('should handel the sort amount', () => {
    const value = `amount`
    wrapper.find(`select`).simulate(`change`, {
        target: { value }
    })

    expect(sortByAmount).toHaveBeenCalled()
})

// test('should handel the date changes ', () => {
//     const startDate = moment(0).add(4, "years")
//     const endtDate = moment(0).add(8, "years")
//     wrapper.find(`DateRangePicker`).prop(`onDatesChange`)({startDate,endtDate})
//     expect(setStartDate).toHaveBeenLastCalledWith(startDate)
//     expect(endtDate).toHaveBeenLastCalledWith(endtDate)


// })