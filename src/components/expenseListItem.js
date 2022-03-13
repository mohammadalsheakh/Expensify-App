import React from 'react'
import moment from 'moment';
import numeral from 'numeral';
import { useNavigate } from 'react-router-dom';

function ExpenseListItem({ id ,description , amount , createdAt}) {
    let navigate = useNavigate()
    const navigateUs = () =>{
        navigate(`/edit/${id}`)
    }
    return (
            <div  className='list-item' onClick={navigateUs} >
                <div>
                    <h3>{description}</h3>
                    <span>{moment(createdAt).format(`MMMM Do YYYY`)}</span>
                </div>
                <h3>
                    {numeral(amount).format('$0,0.00')}
                </h3>
            </div>
    )
}

export default (ExpenseListItem)

    // < Link to = {`edit/${id}`}>
    //     <h3 style={{ color: "red" }}>{description}</h3>
    //     </Link >