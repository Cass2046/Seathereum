import React from 'react';
import {NavLink} from 'react-router-dom';

const navs = ['home', 'market', 'games', 'about', 'data'];

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
    <img className="navbar-brand" src="/favicon.ico" alt="Seathereum" />
    {navs.map((nav, i) => (
      <NavLink className="nav-item nav-link" key={i} to={`/${nav}`}>
        <h5 className="text-capitalize">{nav}</h5>
      </NavLink>
    ))}
  </nav>
);

export default Navbar;
