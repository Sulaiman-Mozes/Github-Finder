import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar bg-primary">
    <NavLink to='/' activeStyle={activeStyle} exact>
      <h1>
        <i className="fab fa-github" /> Github Finder
      </h1>
    </NavLink>
    <ul>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  </nav >
)

const activeStyle = { color: '#F0F8FF' };

Navbar.propTypes = {};
Navbar.defaultProps = {};

export default Navbar;
