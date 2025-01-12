import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const serviceCategories = {
  Skin: {
    link: '/skin',
  },
  Hair: {
    link: '/hair',
  },
  Makeup: {
    link: '/makeup',
  },
  'Hands & Feet': {
    link: '/hands-and-feet',
  },
};

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // Track active link

  const handleServicesMouseEnter = () => setIsServicesOpen(true);
  const handleServicesMouseLeave = () => setTimeout(() => setIsServicesOpen(false), 100);

  const handleLinkClick = (e) => {
    // Set the clicked link as active
    setActiveLink(e.target.getAttribute("href"));
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MyLogo</a>
      </div>
      <ul className="navbar-menu">
        <li
          className="navbar-item"
          onMouseEnter={handleServicesMouseEnter}
          onMouseLeave={handleServicesMouseLeave}
        >
        <Link
          to="/services"
          className={`dropdown-link ${activeLink === "/services" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();  // Prevent navigation
            handleLinkClick(e);  // Handle active link change
          }}
        >
          <strong>Services</strong>
        </Link>


          {isServicesOpen && (
            <div className="dropdown-content">
              <div className="dropdown-grid">
                {Object.entries(serviceCategories).map(([category, { link }]) => (
                  <div key={category} className="dropdown-category">
                    <h3>
                      <a href={link}>{category}</a>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>
        <li className="navbar-item">
          <Link
            to="/bridal"
            className={`dropdown-link ${activeLink === "/bridal" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            Bridal
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/book-appointment"
            className={`dropdown-link ${activeLink === "/book-appointment" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            Book An Appointment
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/contactus"
            className={`dropdown-link ${activeLink === "/contactus" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/salonlocator"
            className={`dropdown-link ${activeLink === "/salonlocator" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            Salon Locator
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
