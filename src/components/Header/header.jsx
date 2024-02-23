import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <BrowserRouter>
    <header className="site-header">
      <div className="top-header-container">
      <div className="top-header">
        <div className="contact-info">
          <span><i className="fas fa-map-marker-alt"></i> Wah Cantt, Pakistan</span>
          <span><i className="fas fa-envelope"></i> info@elexoft.com</span>
          <span><i className="fas fa-phone"></i> +92 514 592013</span>
        </div>
        <div className="social-and-quote">
          <div className="social-links">
            <Link to="#" className="social-link"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#" className="social-link"><i className="fab fa-twitter"></i></Link>
            <Link to="#" className="social-link"><i className="fab fa-instagram"></i></Link>
            <Link to="#" className="social-link"><i className="fab fa-linkedin"></i></Link> {/* LinkedIn */}
            <Link to="#" className="social-link"><i className="fab fa-whatsapp"></i></Link> {/* WhatsApp */}
          </div>
          <button className="quote-button">Get a Free Quote</button>
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
        <ul class="navigation-links">
          <li><Link to="/">Home</Link></li>
          <li class="dropdown">
            <a href="#" class="dropbtn">Services</a>
            <div class="dropdown-content">
              <Link to="/service1">Web Development</Link>
              <Link to="/service2">Mobile Apps</Link>
              <Link to="/service2">Graphic Desigining</Link>
              <Link to="/service2">SEO services</Link>
              <Link to="/service2">Digital Marketing</Link>
            </div>
          </li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>

        </nav>
        </div>
      </div>
      </div>
    </header>
  </BrowserRouter>
  
  
  );
};

export default Header;