import React from "react";
import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";
import ExpensesList from "./expenselist";

const EditDashbord = () => {

    // let navigate = useNavigate()
    //     < button onClick = {() => { navigate("/help") }}> click</button >
    return (
        <div>
            <ExpensesList />
        </div>
    )
}


export default EditDashbord