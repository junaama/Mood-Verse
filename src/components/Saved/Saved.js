import React, {useContext, useEffect, useState} from 'react'
import UserContext from "../../context/context";
import {Link} from 'react-router-dom'
import './saved.css'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Saved = (props) => {
    const [savedVerses, setSavedVerses] = useState([])
    //
    const userId = document.cookie.split("=")[1]
    const { user } = useContext(UserContext);
    useEffect(()=> {
        const makeApiCall = async () => {
            try {
                const res = await axios(`${apiUrl}/api/users/${userId}`)
                
            
                const temp = []
                res.data.verses.map(async (item)=> {
                  
                    const verseRes = await axios(`${apiUrl}/api/verses/${item}`)
                
                    temp.push(verseRes.data)
                })
                console.log("temp", temp)
                setSavedVerses(temp)
        
            } catch (error) {
                console.error(error)
            }
        }
        makeApiCall()
    },[userId])

    const result = savedVerses.map((item)=> {
        console.log(item)
        if(!item){
            return (
                <>
    <p>You haven't saved any verses yet!</p>
                </>
            )
        }
        return (
            <>
            <div className="saved-mood-header"><p>When you were feeling <strong>{item.mood}</strong>, this verse helped you.</p></div>
    <div id="verse-path"><p>{item.versePath}</p></div>
        <div id="verse-content"><p>{item.content}</p></div>
      
            </>
        )

    })
    return (
        <div className="saved-dash-ctn">
            {user.user ? (<><header>Saved</header>
            {result}</>) : ( <>
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>
        </>)}
        </div>
    )
}
export default Saved