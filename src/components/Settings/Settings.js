import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom'
import './settings.css'
import UserContext from '../../context/context'
import axios from 'axios'
import apiUrl from '../../apiConfig'
const Settings = () => {
    const userId = document.cookie.split("=")[1]
    const history = useHistory()
    const {setUser} = useContext(UserContext)
    const logout = () => {
        setUser({
            token: undefined,
            user: undefined,
            id: undefined
        })
        localStorage.setItem("auth-token", "")
        document.cookie = "userId=";
        console.log("in logout", document.cookie)
        history.push('/')
    }
    const destroy = async() => {
       await axios({
           url: `${apiUrl}/api/users/delete/${userId}`,
           method: "DELETE"
       })
       history.push('/')
    }
    return (
       <div className="settings-ctn">
           <div><p>Terms {'&'} Conditions</p><a href="/tc">--{'>'}</a></div>
           <div><p>Privacy Policy</p><a href="/pp">--{'>'}</a></div>
           <div><p>Feedback</p><a href="/feedback">--{'>'}</a></div>
           <div><p>About</p><a href="/about">--{'>'}</a></div>
           <div><p>Logout</p><button onClick={logout}>--{'>'}</button></div>
    <div id="destroy-btn"><p>Delete Account</p><button id="del-btn" onClick={destroy}>--{'>'}</button></div>
       </div>
    )
}

export default Settings;