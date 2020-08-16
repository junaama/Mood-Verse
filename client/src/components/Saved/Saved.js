import React, {useContext} from 'react'
import UserContext from "../../context/context";
import {Link} from 'react-router-dom'
import './saved.css'
const Saved = (props) => {
    const { user } = useContext(UserContext);
    console.log("in saved -", props.savedVerses)
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