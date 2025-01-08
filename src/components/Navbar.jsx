import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MyLogo</a>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item dropdown">
          <a href="#services" className="dropdown-link">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a href="#web-development">Skin Care</a></li>
            <li><a href="#app-development">Hair Treatment</a></li>
            <li><a href="#seo-services">Make Up</a></li>
          </ul>
        </li>
        <li className="navbar-item dropdown">
          <a href="#bridal" className="dropdown-link">
            Bridal
          </a>
        </li>
        <li className="navbar-item">
          <a href="#bookanappointment">Book An Appointment</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Contact Us</a>
        </li>
        <li className="navbar-item">
          <a href="#locator">Salon Locator</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
