import React from "react";
import { connect } from "react-redux";
import {Navigate} from "react-router-dom";
import Header from "../components/Header";

function PrivateRoute({isAthenticated, children }) {
    let isAuth = false
    localStorage.getItem(`uid`) !== undefined ? isAuth = true : isAuth = false
    
    console.log(isAthenticated);
    console.log(isAuth);
    return isAuth ? (<div>< Header /> {children} </div>) : <Navigate to="/" />;

}


const mapStateToProps = (state) => ({
    isAthenticated: state.auth.uid

})

export default connect(mapStateToProps)(PrivateRoute)