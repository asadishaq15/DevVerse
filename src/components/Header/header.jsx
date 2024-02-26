import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import companyLogo from "../../images/companyLogo.png"
import './header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setisDropdownOpen] = useState(false); // State for Services dropdown
  const [isTopHeaderScrolled, setIsTopHeaderScrolled] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsTopHeaderScrolled(true);
      } else {
        setIsTopHeaderScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Function to toggle Services dropdown
  const toggleServicesDropdown = () => {
    setisDropdownOpen(!isDropdownOpen);
  };
  const message = encodeURIComponent("Welcome to DevVerse!");
  return (

      <header className={`site-header ${isTopHeaderScrolled ? 'fixed-top-header' : ''}`}>      <div className="top-header-container">
      <div className="top-header">
        <div className="contact-info">
         <Link to="contact"> <span><i className="fas fa-map-marker-alt"></i> Islamabad, Pakistan</span></Link>
          <Link to="mailto:info@devverse.com"><span><i className="fas fa-envelope"></i> info@devverse.com</span></Link>
        <Link to="tel:+923168704514">  <span><i className="fas fa-phone"></i> +92 316 8704514</span></Link>
        </div>
        <div className="social-and-quote">
          <div className="social-links">
            <Link to="#" className="social-link"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#" className="social-link"><i className="fab fa-twitter"></i></Link>
            <Link to="https://www.instagram.com/devpulse_team?igsh=MzRlODBiNWFlZA==" className="social-link"><i className="fab fa-instagram"></i></Link>
            <Link to="#" className="social-link"><i className="fab fa-linkedin"></i></Link> {/* LinkedIn */}
            <Link to={`https://wa.me/+923168704514?text=${message}`} className="social-link"><i className="fab fa-whatsapp"></i></Link> {/* WhatsApp */}          </div>
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
          <img src={companyLogo} alt="Logo" />
        </Link>
        </div>
        <div className={`fas fa-bars ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}></div>
        <div className="navigation-links">
          <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
            <ul className="navigation-links">
              <li><Link to="/">Home</Link></li>
              {/* Use onClick event handler to toggle Services dropdown */}
              <li className="dropdown" onClick={toggleServicesDropdown}>
                <a href="services" className="dropbtn">Services</a>
                {/* Conditionally render dropdown content based on isDropdownOpen state */}
                <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                  <Link to="/web-development">Web Development</Link>
                  <Link to="/mobile-apps">Mobile Apps</Link>
                  <Link to="/graphic-designing">Graphic Designing</Link>
                  <Link to="/seo-services">SEO Services</Link>
                  <Link to="/digital-marketing">Digital Marketing</Link>
                </div>
              </li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li className="dropdown" onClick={toggleServicesDropdown}>
                <a href="/contact" className="dropbtn">Contact</a>
                {/* Conditionally render dropdown content based on isDropdownOpen state */}
                <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                  <Link to="/contact">Contact Us</Link>
                  <Link to="/request-quote">Get A Quote</Link>
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