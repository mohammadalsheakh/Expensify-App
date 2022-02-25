import React from 'react'
import { connect } from 'react-redux'
import { StartLogin } from '../actions/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/fireBase'
import { loginPage } from '../index'

export const LoginPage = (props) =>{
    const navigate = useNavigate()
    return(
        <div className='box-layout'>
            <div className='box-layout__box' >
                <h1>Expensify</h1>
                <p>Its time to get your expenses under control. </p>
                <button className='buttun' onClick={() => {
                    props.dispatch(StartLogin()).then(() => {
                        auth.onAuthStateChanged((user) => {
                            if (user) {
                                localStorage.setItem(`uid`, user.uid)
                                loginPage()
                                navigate("/dashboard");
                            }

                        })
                    })
                }}>Login with Google</button>
            </div>
            
        </div>
    )
}
const mapDispatchToProps = (state) => ({
    star: "just here"
})

export default connect(mapDispatchToProps)(LoginPage)




// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(StartLogin())
// })

// export default connect(undefined, mapDispatchToProps)(LoginPage)