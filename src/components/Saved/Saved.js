import React, {useContext, useEffect, useState} from 'react'
import UserContext from "../../context/context";
import {Link} from 'react-router-dom'
import './saved.css'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Saved = (props) => {
    const [savedVerses, setSavedVerses] = useState([])
    
    const userId = document.cookie.split("=")[1]
    const { user } = useContext(UserContext);
    // console.log("in saved -", props.savedVerses)
    useEffect(()=> {
        const makeApiCall = async () => {
            try {
                const res = await axios(`${apiUrl}/api/users/${userId}`)
                console.log("res - ", res.data)
                setSavedVerses([res.data])
            } catch (error) {
                console.error(error)
            }
        }
        makeApiCall()
    },[])
    const result = savedVerses.map((item)=> {
        console.log(item.verses)
    })
    return (
        <div className="saved-dash-ctn">
            {user.user ? (<> No Saved Verses Yet</>) : ( <>
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>
        </>)}
        </div>
    )
}
export default Saved