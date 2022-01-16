import React from 'react'
import { connect } from "react-redux";
import { setTextFilter} from '../actions/filters'
import { DateRangePicker } from 'react-dates';
import { sortByDate , sortByAmount, setEndDate, setStartDate} from '../actions/filters'
import ExpenseListItem from './expenseListItem';

export class ExpenseDashPordFilter extends React.Component{

    state = {
        clenderFoucused : null
    }

    onDatesChange = ({ startDate, endDate}) =>{
        this.props.setEndDate(endDate)
        this.props.setStartDate(startDate)
    }
    onFocusChange = (clenderFoucused) =>{
        this.setState(() => ({clenderFoucused}))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => {
        if (e.target.value === `date`) {
            this.props.sortByDate()
        }
        else if (e.target.value === `amount`) {
            this.props.sortByAmount()
        }
    }
    render(){
        return(
            <div>
                <select value={this.props.filterValue.sortBy} onChange={this.onSortChange} >
                    <option value="date" key="date">Date</option>
                    <option value="amount" key="amount">Amount</option>
                </select>
                <input type="text" value={this.props.filterValue.text} onChange={this.onTextChange} />
                <DateRangePicker 
                startDate={this.props.filterValue.startDate}
                startDateId="My Start Date"
                endDate={this.props.filterValue.endDate}
                endDateId="My End Date"
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.clenderFoucused}
                onFocusChange={this.onFocusChange}
                horizontalMargin={0}
                numberOfMonths={1}
                isOutsideRange={() => false}
                screenReaderInputMessage="pick range"
                showClearDates={true}

                />
            </div>

        )
    }
}

const connectMe = (state) =>{
    return{
        filterValue : state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter : text => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate : () => dispatch(sortByDate()),
    setStartDate : (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate))
    
})
export default connect(connectMe,mapDispatchToProps)(ExpenseDashPordFilter)