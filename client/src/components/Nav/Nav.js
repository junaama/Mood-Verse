import React from 'react'
import {Link} from 'react-router-dom'
import "./Nav.css"
import house from './house.png' 
import star from './star.png'
import settings from './settings.png'
const Nav = () => {

    return (
        <>
    <nav>
        <Link to='/' ><img src={house} alt="home link"></img></Link>
        <Link to='/verse'>Verse</Link>
        <Link to='/saved'><img src={star} alt="saved link"></img></Link>
        <Link to="/settings"><img src={settings} alt="settings link"></img></Link>
    </nav>
        </>
    )
}

export default Nav