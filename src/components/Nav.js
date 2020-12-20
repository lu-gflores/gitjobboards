import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../styles/Nav.css'

const Nav = () => {
   

    return (
        <>
        <div className='nav-header'>
            <Link to='/' className="brand">devjobs</Link>
                

                <div className="toggle-theme">
                    <label htmlFor='checkbox'>
                        <input type="checkbox" className='checkbox'/>
                        <div className="slider"></div>
                    </label>

            </div>  
        </div>
        </>
    )
}

export default Nav
