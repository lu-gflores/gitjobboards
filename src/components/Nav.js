import React from 'react'
import '../styles/Nav.css'

const Nav = () => {
    return (
        <>
        <div className='nav-header'>
            <div className="brand">devjobs</div>

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
