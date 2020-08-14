import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {

    return (
        <div>
            <h4>Get bible verses based on your current mood!</h4>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Landing