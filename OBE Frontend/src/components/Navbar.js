import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav >
        <div className ="header">
          <div className="header">
            <Link className="header" to="/"  > 
            <h1>Faculty of Engineering
            </h1>
            </Link>
            <ul className="right">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              <li> <NavLink to='/admin'> Admin</NavLink> </li>
            </ul>
          </div>
          </div>  
    </nav> 
  )
}

export default Navbar