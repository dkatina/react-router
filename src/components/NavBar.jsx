import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate(); //creates a navigate function, that you can call with any path as the argument and nav to that route

    const handleClick = (event) => {
        // some kind of logic

        //followed by a re-route
        navigate('/contact')
    }


  return (
    <div>
        <nav>
            <h1>Dylan.com</h1>
            <ul>
                <Link to='/'>Home</Link> 
                <NavLink to='/about'>About</NavLink>
                <button onClick={(event)=>{handleClick(event)}}>Contact</button>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar