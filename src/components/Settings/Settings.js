import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom'
import './settings.css'
import UserContext from '../../context/context'
const Settings = () => {
    const history = useHistory()
    const {user, setUser} = useContext(UserContext)
    const logout = () => {
        setUser({
            token: undefined,
            user: undefined,
            id: undefined
        })
        localStorage.setItem("auth-token", "")
        document.cookie = "userId=" + "";
        console.log("in logout", document.cookie)
        history.push('/')
    }
    return (
       <div className="settings-ctn">
           <div><p>Terms {'&'} Conditions</p><a href="/tc">-{'>'}</a></div>
           <div><p>Privacy Policy</p><a href="/pp">-{'>'}</a></div>
           <div><p>Feedback</p><a href="/feedback">-{'>'}</a></div>
           <div><p>About</p><a href="#">-{'>'}</a></div>
           <div><p>Logout</p><button onClick={logout}>{'>'}</button></div>
       </div>
    )
}

export default Settings;