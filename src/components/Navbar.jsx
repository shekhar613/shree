import React from 'react';
import '../Assets/Styles/navbar.css';
import logo from '../Assets/Images/shreeLogo.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo and Brand Name */}
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="logo" className="navbar-logo" />
            <span className="logo-text ms-2">श्री भैरव शक्ति</span>
          </NavLink>

          {/* Hamburger Menu for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  activeClassName="active"
                >
                  Feedback
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/image-gallery"
                  activeClassName="active"
                >
                  Image Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/events"
                  activeClassName="active"
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/news"
                  activeClassName="active"
                >
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/profile"
                  activeClassName="active"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;