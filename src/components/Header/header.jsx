import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import companyLogo from "../../assets/companyLogo.png"
import './header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isDropdownOpen, setisDropdownOpen] = useState(false); // State for Services dropdown
  const [isTopHeaderScrolled, setIsTopHeaderScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleLink = (link) => {
    setActiveLink(link === activeLink ? null : link);
    setActiveDropdown(null); // Close active dropdown when a link is clicked
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(dropdown === activeDropdown ? null : dropdown);
    setActiveLink(null); // Close active link when a dropdown is clicked
  };

  

  useEffect(() => {
    // Close navbar when clicked outside
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  // Function to toggle Services dropdown
  const toggleServicesDropdown = () => {
    setisDropdownOpen(!isDropdownOpen);
  };
  const message = encodeURIComponent("Welcome to DevVerse!");
  return (

    <header className={`site-header ${isNavOpen ? 'open' : ''}`} ref={navRef}>
    <div className="top-header-container">
      <div className="top-header">
        <div className="contact-info">
          <Link to="contact">
            <span><i className="fas fa-map-marker-alt"></i> Islamabad, Pakistan</span>
          </Link>
          <Link to="mailto:info@devverse.com">
            <span><i className="fas fa-envelope"></i> info@devverse.com</span>
          </Link>
          <Link to="tel:+923168704514">
            <span><i className="fas fa-phone"></i> +92 311 5728713</span>
          </Link>
        </div>
        <div className="social-and-quote">
          <div className="social-links">
            <Link to="https://www.facebook.com/profile.php?id=61556913147888&mibextid=dGKdO6" className="social-link">
              <i className="header-fab-icon fab fa-facebook-f"></i>
            </Link>
            <Link to="https://x.com/devverseorg?s=21" className="social-link">
              <i className="header-fab-icon fab fa-twitter"></i>
            </Link>
            <Link to="https://www.instagram.com/devverseorg/?igsh=YjVuNnY1Y3htZjhi#/" className="social-link">
              <i className="header-fab-icon fab fa-instagram"></i>
            </Link>
            <Link to="https://www.linkedin.com/company/devverse-01/" className="social-link">
              <i className="header-fab-icon fab fa-linkedin"></i>
            </Link>
            <Link to={`https://wa.me/+923168704514?text=${message}`} className="social-link">
              <i className="header-fab-icon fab fa-whatsapp"></i>
            </Link>
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
            <img src={companyLogo} alt="Logo" />
          </Link>
        </div>
        <div className={`fas fa-bars ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}  ></div>
        <div className="navigation-links" >
          <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
            <ul className="navigation-links">
              <li><Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={() => {toggleLink('/'); setIsNavOpen(false)}}>Home</Link></li>
              <li className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
                <Link to="/services" className="dropbtn" onClick={() => toggleDropdown('services')}>Services</Link>
                <div className={`dropdown-content ${activeDropdown === 'services' ? 'open' : ''}`}>
                  <Link to="/web-development" onClick={() => {setActiveDropdown(null); setIsNavOpen(false)}}>Web Development</Link>
                  <Link to="/graphic-designing" onClick={() => {setActiveDropdown(null); setIsNavOpen(false)}}>Graphic Designing</Link>
                  <Link to="/seo-services" onClick={() => {setActiveDropdown(null); setIsNavOpen(false)}}>SEO Services</Link>
                  <Link to="/digital-marketing" onClick={() => {setActiveDropdown(null); setIsNavOpen(false)}}>Digital Marketing</Link>
                </div>
              </li>
              <li><Link to="/portfolio" className={activeLink === '/portfolio' ? 'active' : ''} onClick={() => {toggleLink('/portfolio'); setIsNavOpen(false)}}>Portfolio</Link></li>
              <li><Link to="/testimonials" className={activeLink === '/testimonials' ? 'active' : ''} onClick={() => {toggleLink('/testimonials'); setIsNavOpen(false)}}>Testimonials</Link></li>
              <li className={`dropdown ${activeDropdown === 'contact' ? 'active' : ''}`} ref={navRef}>
                <Link to="/contact" className="dropbtn" onClick={() => toggleDropdown('contact')}>Contact</Link>
                <div className={`dropdown-content ${activeDropdown === 'contact' ? 'open' : ''}`}>
                  <Link to="/contact" onClick={() => {setActiveDropdown(null); setIsNavOpen(false)}}>Contact Us</Link>
                  <Link to="/request-quote" onClick={() => {setActiveDropdown(null); setIsNavOpen(false)}}>Get A Quote</Link>
                </div>
              </li>
              <li><Link to="/faq" className={activeLink === '/faq' ? 'active' : ''} onClick={() => {toggleLink('/faq'); setIsNavOpen(false)}}>FAQ</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  
  
  
  );
};

export default Header;