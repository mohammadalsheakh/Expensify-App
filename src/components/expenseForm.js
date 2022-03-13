import React, { Component } from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';




export default class ExpenseForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount: ``,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ``
        }

    }
    
    
    onDescriptionChange = (e) =>{
        let description = e.target.value
        this.setState(() => ({ description}))
    }

    onAmountChagne = (e) =>{
        const solve = e.target.value
        let note = ``
        if (solve.includes(`.`)) {
            note = solve.slice(0, solve.indexOf(`.`) + 2)
        }
        else note = solve.slice(0,solve.length)
        this.setState(() => ({amount : note}))
    }

    onNoteChange = (e) =>{
        let noteChange = e.target.value
        this.setState(() => ({note : noteChange}))
    }

    onDateChange = (createdAt) =>{ // here we have created at representes the variable that contaian the current date 
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({focused}) => {
        this.setState({ calendarFocused: focused})
    }

    onSubmit = (e) =>{
        e.preventDefault()
        if (!this.state.description  || !this.state.amount) {
            this.setState({error : `Pleas provide amount and description`})
        }
        else {
            this.setState({ error: `` })
            this.props.getTheExpense({
                description : this.state.description,
                amount : Number.parseFloat(this.state.amount),
                createdAt : this.state.createdAt.valueOf(),
                note : this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                <form  className='form' onSubmit={this.onSubmit}>
                    {this.state.error && <p className='form__erorr' >{this.state.error}</p>}
                    <input type="text" className='text-inputs'  placeholder='Description' autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type="number" placeholder='Amount' className='text-inputs' value={this.state.amount} onChange={this.onAmountChagne} />
                    <SingleDatePicker 
                        
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        screenReaderInputMessage={` `}
                        horizontalMargin={0}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea placeholder='You can add a note here' className='text-area' value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <div>
                        <button className='buttun' >Save Expense</button>
                    </div>
                </form>
            </div>
        )
    }
}

