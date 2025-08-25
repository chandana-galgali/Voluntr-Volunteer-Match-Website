import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpg'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Voluntr Logo" className="logo" width="40" height="40" decoding="async" />
        <div className="logo-text">Voluntr</div>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/volunteer-list">Volunteers</Link>
        <Link to="/volunteer-form">Become a Volunteer</Link>
      </div>
    </nav>
  );
};

export default Navbar;