import React from 'react'
import { Link, Outlet } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';
import { useNavigate } from 'react-router-dom';

function ExpenseListItem({ id ,description , amount , createdAt}) {
    let navigate = useNavigate()
    const navigateUs = () =>{
        navigate(`/edit/${id}`)
    }
    return (
        <div>
        
            <button style={{ color:"red"}} onClick={navigateUs} >
                {description}
            </button>
            <p>
                {numeral(amount).format('$0,0.00')}
            - 
                {moment(createdAt).format(`MMMM Do YYYY`)}
            </p>
            
        </div>
    )
}

export default (ExpenseListItem)

    // < Link to = {`edit/${id}`}>
    //     <h3 style={{ color: "red" }}>{description}</h3>
    //     </Link >