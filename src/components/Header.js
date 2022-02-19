import React from "react";
import { NavLink } from "react-router-dom"
import { connect } from "react-redux";
import { StartLogout } from "../actions/auth";
import { auth } from "../firebase/fireBase";
import { useNavigate } from "react-router-dom";
import { logOut } from "../index";
export const Header = (props) => {
    const navigate = useNavigate()
    return (
        <div>
        <h1>Expensify</h1>
        < NavLink to="/" activeClassName="active" > Dash Bord </ NavLink>
        <br />
        < NavLink to="/create" activeClassName="active" > Create Expense Page </ NavLink>
        <br />
        <NavLink to="/help"> Help </NavLink>
        <br />
        <button onClick={
                () => {
                    props.dispatch(StartLogout()).then(() =>{
                        auth.onAuthStateChanged((user) => {
                            if (!user) {
                                localStorage.setItem(`uid`, undefined)
                                console.log(`out`);
                                logOut()
                                navigate("/");
                            }

                        })
                    } )
                }
        } >Logout</button>

    </div>)
    
    }

const mapDispatchToProps = (state) => ({
    startLogout: `error`
})
export default connect(mapDispatchToProps)(Header)