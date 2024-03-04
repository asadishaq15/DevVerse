import React from 'react';

import CompanyLogo from "../../assets/0.1.png";
import PsebLogo from "../../assets/secp logo.jpeg";
import PakFlag from "../../assets/pak flag.png";
import SaudiFlag from "../../assets/saudi flag.png";
import { Link } from 'react-router-dom';
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer">
   <div className="footer-top">
        <div className="container">
          <div className="rowFooter">
          <div className="col-md-3 footer-newsletter">
              <h4>GET IN TOUCH</h4>
              <p>Contact Us</p>
              <form action="" method="post">
                <input type="email" name="email" placeholder='mail@example.com' />
                <input type="submit" value="Send" />
              </form>
              <img src={CompanyLogo} className='footer-logo' style={{marginTop:"40px"}}></img>
            </div>
            <div className="SocialLinksContainer">
            <h4 className="SocialLinksHeading">FOLLOW US</h4>
            <div className="SocialIcons">
              <Link to="https://www.facebook.com/profile.php?id=61556913147888&mibextid=dGKdO6" className="social-icon facebook" target="_blank">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="https://x.com/devverseorg?s=21" className="twitter" target="_blank">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="https://www.linkedin.com/company/devverse-01/" className="linkedin" target="_blank">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link to="https://www.instagram.com/devverseorg/?igsh=YjVuNnY1Y3htZjhi#/" className="instagram" target="_blank">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
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
              <h4>Registered By SECP</h4>
              <Link to="https://www.secp.gov.pk/">
              <img src={PsebLogo} alt="Devverse Logo" style={{ width: '100%', maxWidth: '150px', height: 'auto', marginTop: '10px' }} />
              </Link>
              <br/>
              <br/>
               <img src={PakFlag} alt="Flag Image" style={{ width: '100%', maxWidth: '60px', height: 'auto', marginTop: '10px' }} />

              <p>
               <strong>Address:</strong> G8 Markaz<br />
                Islamabad, Pakistan <br />
                <strong>Phone:</strong> +92 316 8704514<br />
              </p>
              <img src={SaudiFlag} alt="Flag Image" style={{ width: '100%', maxWidth: '60px', height: 'auto', marginTop: '10px' }} />

                <p>
                <strong>Address:</strong> Ad Dawadmi<br />
                  Riyadh, Saudi Arabia <br />
                  <strong>Phone:</strong> +966 5000 65891<br />
                  <br/>
                  <strong >Email:</strong> info@devverse.com<br />
                </p>

            
            </div>

         
          </div>
       


        </div>
      </div>

      <div className="container footer-container">
  <div className="row align-items-start">
    <div className="col-md-6 col-sm-12 mb-3 copyright" style={{ color: '#fff', fontSize: '1.3rem' }}>
      Copyright &copy; 2023-2024 <strong style={{ color: '#ff6600' }}>DevVerse™</strong>
    </div>
    <div className="col-md-6 col-sm-12 Footer-button-container">
      <div className="button-list">
      <Link to="/"><button className="button">Home</button></Link>
      <Link to="/services"><button className="button">Services</button></Link>
      <Link to="/testimonials"><button className="button">Testimonials</button></Link>
      <Link to="/web-development"><button className="button">Web Development</button></Link>
      <Link to="/mobile-apps"><button className="button">App Development</button></Link>
      <Link to="/seo-services"><button className="button">SEO Services</button></Link>

      </div>
    </div>
    <div className="col-md-6 col-sm-12 mt-3 trademark" style={{ color: '#fff', fontSize: '1.3rem' }}>
  
    </div>
  </div>
</div>


    </div>
  );
};


export default Footer;
