/* NavBar.js */
import React, { useState } from 'react';
import './NavBar.css'; // Import CSS file for styling

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="./images/logo.jpg" 
          alt="Company Logo"
          className="logo"
        />
      </div>
      <div className="navbar-menu">
        <ul className="menu-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#vehicle-model">Vehicle Model</a></li>
          <li><a href="#our-team">Our Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-buttons">
        {!loggedIn ? (
          <>
            <button className="login-btn" onClick={handleLogin}>Sign In</button>
            <button className="register-btn">Register</button>
          </>
        ) : (
          <>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            <button className="profile-btn">Profile</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
