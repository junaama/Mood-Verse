import React from 'react'
import {Link} from 'react-router-dom'
import "./Nav.css"
import home from './home.png' 
import star from './star.png'
import settings from './settings.png'
import angel from './angel.png'
const Nav = () => {

    return (
        <>
    <nav>
        <Link to='/home' ><img src={home} alt="home link"></img></Link>
        <Link to='/verse'><img src={angel} alt="verse link"></img></Link>
        <Link to='/saved'><img src={star} alt="saved link"></img></Link>
        <Link to="/settings"><img src={settings} alt="settings link"></img></Link>
    </nav>
        </>
    )
}

export default Nav