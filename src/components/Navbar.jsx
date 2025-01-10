import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure this import is present
import "./Navbar.css";
const serviceCategories = {

  Skin: {
    link: '/skin',
    items: [
      { name: 'Waxing', link: '/skin' },
      { name: 'Threading', link: '/skin' },
      { name: 'Facial', link: '/skin' },
      { name: 'Mask', link: '/skin' },
      { name: 'Spa', link: '/skin' },
    ],
  },
  Hair: {
    link: '/hair',
    items: [
      { name: 'Haircut', link: '/hair' },
      { name: 'Hair Color', link: '/hair' },
      { name: 'Hair Treatments', link: '/hair' },
      { name: 'Styling', link: '/hair' },
      { name: 'Texture', link: '/hair' }
    ],
  },
  Makeup: {
    link: '/makeup',
    items: [
      { name: 'Trend and Side Dressing', link: '/makeup' },
      { name: 'Bridal', link: '/makeup' },
      { name: 'Spot Makeup Services', link: '/makeup' }
    ],
  },
  'Hands & Feet': {
    link: '/hands-and-feet',
    items: [
      { name: 'Hand Care', link: '/hands-and-feet' },
      { name: 'Feet Care', link: '/hands-and-feet' },
      { name: 'Nails', link: '/hands-and-feet' }
    ],
  },
};

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServicesMouseEnter = () => setIsServicesOpen(true);
  const handleServicesMouseLeave = () => setTimeout(() => setIsServicesOpen(false), 100);

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
          <Link to="/services" className="dropdown-link">
            <strong>Services</strong>
          </Link>

          {isServicesOpen && (
            <div className="dropdown-content">
            <div className="dropdown-grid">
              {Object.entries(serviceCategories).map(([category, { link, items }]) => (
                <div key={category} className="dropdown-category">
                  <h3>
                    <a href={link}>{category}</a>
                  </h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item.name}>
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          )}
        </li>
        <li className="navbar-item">
        <Link to="/bridal" className="dropdown-link">
           Bridal
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/book-appointment" className="dropdown-link">
            Book An Appointment
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contactus" className="dropdown-link">
            Contact Us
          </Link>
        </li>
        <li className="navbar-item">
        <Link to="/salonlocator" className="dropdown-link">
            Salon Locator
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;