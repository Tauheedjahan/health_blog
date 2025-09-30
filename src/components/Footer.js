import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h1>HealthBlog</h1>
      </div>
      <div className="footer-middle">
        <h3></h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/articles">Articles</a></li>
          <li><a href="/programs">Programs</a></li>
          <li><a href="/donate">Donate</a></li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Contact</h3>
        <p>123 Health St.</p>
        <p>Fitness City, 45678</p>
        <p>Email: info@healthblog.com</p>
        <p>Phone: +123 456 7890</p>
        <p className="footer-copy">© 2025 HealthBlog by TJ. Built and secured with React.
</p>
      </div>
    </footer>
  );
}

export default Footer;
