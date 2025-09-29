import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    const navigate = useNavigate(); //creates a navigate function, that you can call with any path as the argument and nav to that route

    const handleClick = (event) => {
        // some kind of logic

        //followed by a re-route
        navigate('/contact')
    }


  return (
    <>
        <nav>
            <h1><Link to='/' >Dylan.com</Link></h1>
            <ul className='navLinks'>
                <NavLink className='navLink' to='/'>Home</NavLink> 
                <NavLink className='navLink' to='/about'>About</NavLink>
                <NavLink className='navLink' to='/contact'>Contact</NavLink>
            </ul>
        </nav>
    </>
  )
}

export default NavBar