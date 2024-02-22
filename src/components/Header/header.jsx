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
      <Link to="/" className="site-logo">
        <img src='' alt="Logo" />
      </Link>
      <div className={`fas fa-bars ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}></div>
      <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/services">services</Link></li>
          <li><Link to="/portfolio">portfolio</Link></li>
          <li><Link to="/team">team</Link></li>
          <li><Link to="/careers">career</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  </BrowserRouter>
  
  );
};

export default Header;