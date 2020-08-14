import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from '../../context/context'

const Landing = () => {
    const {user, setUser} = useContext(UserContext)
    const history = useHistory()
    const register = () => history.push('/register')
    const login = () => history.push('/login')
    const logout = () => {
        setUser({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token", "")
    }
    return (
        <div>
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