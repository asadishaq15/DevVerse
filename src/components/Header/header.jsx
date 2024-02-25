import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setisDropdownOpen] = useState(false); // State for Services dropdown

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to toggle Services dropdown
  const toggleServicesDropdown = () => {
    setisDropdownOpen(!isDropdownOpen);
  };

  return (

    <header className="site-header">
      <div className="top-header-container">
      <div className="top-header">
        <div className="contact-info">
          <span><i className="fas fa-map-marker-alt"></i> Islamabad, Pakistan</span>
          <span><i className="fas fa-envelope"></i> info@devverse.com</span>
          <span><i className="fas fa-phone"></i> +92 316 8704514</span>
        </div>
        <div className="social-and-quote">
          <div className="social-links">
            <Link to="#" className="social-link"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#" className="social-link"><i className="fab fa-twitter"></i></Link>
            <Link to="#" className="social-link"><i className="fab fa-instagram"></i></Link>
            <Link to="#" className="social-link"><i className="fab fa-linkedin"></i></Link> {/* LinkedIn */}
            <Link to="#" className="social-link"><i className="fab fa-whatsapp"></i></Link> {/* WhatsApp */}
          </div>
          <Link to="request-quote">
          <button className="quote-button">Get a Free Quote</button>
          </Link>
        </div>
      </div>
      </div>
      <div className="Header-navigations">

     
      <div className="navigation-container">
        <div className="companyLogo">

        <Link to="/" className="site-logo">
          <img src='devvserse logo.png' alt="Logo" />
        </Link>
        </div>
        <div className={`fas fa-bars ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}></div>
        <div className="navigation-links">
          <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
            <ul className="navigation-links">
              <li><Link to="/">Home</Link></li>
              {/* Use onClick event handler to toggle Services dropdown */}
              <li className="dropdown" onClick={toggleServicesDropdown}>
                <a href="#" className="dropbtn">Services</a>
                {/* Conditionally render dropdown content based on isDropdownOpen state */}
                <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                  <Link to="/service1">Web Development</Link>
                  <Link to="/service2">Mobile Apps</Link>
                  <Link to="/service3">Graphic Designing</Link>
                  <Link to="/service4">SEO Services</Link>
                  <Link to="/service5">Digital Marketing</Link>
                </div>
              </li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/portfolio">Testimonials</Link></li>
              <li className="dropdown" onClick={toggleServicesDropdown}>
                <a href="#" className="dropbtn">Contact</a>
                {/* Conditionally render dropdown content based on isDropdownOpen state */}
                <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                  <Link to="/contactus">Contact Us</Link>
                  <Link to="/Get A Quote">Get A Quote</Link>
                </div>
              </li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      </div>
    </header>

  
  
  );
};

export default Header;