import React from 'react'
import { Link, Outlet } from "react-router-dom";


function ExpenseListItem({ id ,description , amount , createdAt}) {
    return (
        <div>
        <Link to={`edit/${id}`}>
                <h3 style={{ color :"red"}}>{description}</h3>
        </Link>
            
            <p>{amount} - {createdAt}</p>
            
        </div>
    )
}

export default (ExpenseListItem)