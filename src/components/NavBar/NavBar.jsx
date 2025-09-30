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
            <h1><Link to='/' className='logo'>Dylan.com</Link></h1>
            <ul className='navLinks'>
                <NavLink className={({isActive})=> isActive? 'isActive': 'navLink' } to='/'>HOME</NavLink> 
                <NavLink className={({isActive})=> isActive? 'isActive': 'navLink' } to='/about'>ABOUT</NavLink>
                <NavLink className={({isActive})=> isActive? 'isActive': 'navLink' } to='/contact'>CONTACT</NavLink>
                <NavLink className={({isActive})=> isActive? 'isActive': 'navLink' } to='/posts'>POST</NavLink>
            </ul>
        </nav>
    </>
  )
}

export default NavBar