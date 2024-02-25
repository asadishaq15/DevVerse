import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
   <div className="footer-top">
        <div className="container">
          <div className="rowFooter">
          <div className="col-md-3 footer-links">
          <h4>About Us</h4>
          <ul>
            <li><i className="ion-ios-arrow-forward"></i> <Link to="/">Home</Link></li>
            <li><i className="ion-ios-arrow-forward"></i> <Link to="/about">About us</Link></li>
            <li><i className="ion-ios-arrow-forward"></i> <Link to="/service">Our services</Link></li>
            <li><i className="ion-ios-arrow-forward"></i> <Link to="/terms">Terms & condition</Link></li>
            <li><i className="ion-ios-arrow-forward"></i> <Link to="/privacy">Privacy policy</Link></li>
          </ul>
        </div>

        <div className="col-md-5 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="ion-ios-arrow-forward"></i> <Link to="/portfolio">Portfolio</Link></li>
            <li><i className="ion-ios-arrow-forward"></i> <Link to="/contact">Contact</Link></li>
            <li><i className="ion-ios-arrow-forward"></i> <Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

            <div className="col-md-3 footer-contact" style={{ fontSize: '1.5rem' }}>
              <h4>Contact Us</h4>
              <p>
                G8 Markaz<br />
                Islamabad, Pakistan <br />
                <strong>Phone:</strong> +92 316 8704514<br />
                <strong>Email:</strong> info@devverse.com<br />
              </p>

              <div className="social-links">
                <a href="https://www.facebook.com/"><FacebookIcon/></a>
                <a href="https://twitter.com/login?lang=en"><TwitterIcon/></a>
                <a href="https://www.linkedin.com/"><LinkedInIcon/></a>
                <a href="https://www.instagram.com/"><InstagramIcon/></a>
              </div>
            </div>

            <div className="col-md-3 footer-newsletter">
              <h4>Subscription</h4>
              <p>With Our Skills Put Together, You Get An Ensemble Capable Of Doing Anything And Everything Your Brand Needs. Subscribe Here To Get Our Latest Updates.</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 copyright" style={{ color: '#fff', fontSize: '1.3rem' }}>
            Copyright &copy; 2024 DevVerse. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;
