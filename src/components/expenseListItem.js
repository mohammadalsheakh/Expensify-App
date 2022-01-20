import React from 'react'
import { Link, Outlet } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';

function ExpenseListItem({ id ,description , amount , createdAt}) {
    return (
        <div>
        <Link to={`edit/${id}`}>
                <h3 style={{ color :"red"}}>{description}</h3>
        </Link>
            
            <p>
                {numeral(amount).format('$0,0.00')}
            - 
                {moment(createdAt).format(`MMMM Do YYYY`)}
            </p>
            
        </div>
    )
}

export default (ExpenseListItem)