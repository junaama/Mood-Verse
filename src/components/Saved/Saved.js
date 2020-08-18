import React, {useContext, useEffect} from 'react'
import UserContext from "../../context/context";
import {Link} from 'react-router-dom'
import './saved.css'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Saved = (props) => {
    console.log(document.cookie)
    console.log(document.cookie.split("=")[1])
    const { user } = useContext(UserContext);
    // console.log("in saved -", props.savedVerses)
    useEffect(()=> {
        const makeApiCall = async () => {
            try {
                const res = await axios(`${apiUrl}/api/users`)
                console.log("res - ", res.data)
            } catch (error) {
                console.error(error)
            }
        }
        makeApiCall()
    },[])
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