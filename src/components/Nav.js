import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../styles/Nav.css'

const Nav = () => {
    const [isActive, setActive] = useState('false')
    const handleTheme = () => {
        setActive(!isActive)
    }

    return (
        <>
        <div className='nav-header'>
            <Link to='/' className="brand">devjobs</Link>        
                <div className={`form-check form-switch`}>
                    <input onClick={handleTheme} type="checkbox" id='flexSwitchCheckDefault' className={`form-check-input toggle-${isActive ? 'dark' : 'light'}`}/>
            </div>  
        </div>
        </>
    )
}

export default Nav
