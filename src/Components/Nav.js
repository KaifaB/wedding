import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <div className="nav">
        <ul>
            <NavLink to="/" exact="true"><li className="nav-link">Home</li></NavLink>
            <NavLink to="/info"><li className="nav-link">Info</li></NavLink>
            <NavLink to="/registry"><li className="nav-link">Registries</li></NavLink>
            <NavLink to="/rsvp"><li className="nav-link">RSVP</li></NavLink>
        </ul>
    </div>
  );
}

export default Nav;
