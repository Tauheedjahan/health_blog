import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // search icon
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">HealthBlog</div>

      {/* Right: Menu + Search */}
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/articles">Article</Link></li>
          <li><Link to="/program">Program</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>

        {/* Search Box with Icon */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
