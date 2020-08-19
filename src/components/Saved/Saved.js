import React, {useContext, useEffect, useState} from 'react'
import UserContext from "../../context/context";
import {Link, useHistory} from 'react-router-dom'
import './saved.css'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import star from "../Nav/star.png";
import filledStar from '../Verse/filled-star.png'
const Saved = () => {
    const history = useHistory()
    const [savedVerses, setSavedVerses] = useState([])
    const [isFave, setIsFave] = useState(true)
    const userId = document.cookie.split("=")[1]
    const { user } = useContext(UserContext);

    const handleSaveUpdate = async (verseId) => {
        setIsFave(false)
        try {
          await axios({
            method: "PUT",
            url: `${apiUrl}/api/users/${userId}/removeVerse/${verseId}`,
            
          });
        } catch (error) {
          console.error(error);
        }
        history.go(0)
        
      };
    useEffect(()=> {
        const makeApiCall = async () => {
            try {
                const res = await axios(`${apiUrl}/api/users/${userId}`)
                
            
                const temp = []
                res.data.verses.map(async (item)=> {
                  
                    const verseRes = await axios(`${apiUrl}/api/verses/${item}`)
                
                    temp.push(verseRes.data)
                })
                setSavedVerses(temp)
        
            } catch (error) {
                console.error(error)
            }
        }
        makeApiCall()
    },[userId])

    const result = savedVerses.map((item, i)=> {
        if(!item){
            return (
                <>
    <p key={i}>You haven't saved any verses yet!</p>
                </>
            )
        }
        return (
            <div key={i+3}>
            <div className="saved-mood-header"><p>When you were feeling <strong>{item.mood}</strong>, this verse helped you.</p></div>
    <div id="verse-path"><p>{item.versePath}</p></div>
        <div id="verse-content"><p>{item.content}</p></div>
        <div id="vrs-btn">
            <button onClick={() => handleSaveUpdate(item.id)}>
              <img src={isFave ? filledStar : star} alt="favorite button" />
            </button>
          </div>
            </div>
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