import React, {useContext, } from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from '../../context/context'

import { Alert } from '@material-ui/lab';

const Landing = () => {


    const {user, setUser} = useContext(UserContext)
    const history = useHistory()
    const register = () => history.push('/register')
    const login = () => history.push('/login')
    const logout = () => {
        setUser({
            token: undefined,
            user: undefined,
            id: undefined
        })
        localStorage.setItem("auth-token", "")
        document.cookie = "userId=";
        console.log("in logout", document.cookie)
    }
   
    return (
        <div>
         
    <Alert variant="filled" severity="info">
        <p style={{"fontWeight": "700"}}>You must enable cookies!</p>
    This website uses cookies to give you a relevant experience. By enabling cookies you agree to allow cookies to be placed. To get more information about cookies and your personal data processing, please check out our Privacy Policy.
</Alert>
            <h4>Get bible verses based on your current mood!</h4>
            {user.user ? (<button onClick={logout}>Log Out</button>) : (
                <>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
                </>
            )}
        </div>
    )
}

export default Landing