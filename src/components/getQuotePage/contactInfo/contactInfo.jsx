import React from 'react';
import './contactInfo.css'
const ContactInfoContainer = () => {
  return (
    <div className="contact-info-container">
   
      <h2 className="contact-info-title">Get In Touch</h2>
      <p>
        Renowned mobile app and web development company delivering user-engaging mobile applications and responsive websites for multiple industry verticals.
      </p>
      <ul className="contact-details" style={{color:"white"}}>
        <li>
          <span className="contact-icon" style={{color:"white"}}>&#x2709;</span> Email:  <a href="mailto:sales@elexoft.com">  sales@devverse.com</a>
        </li>
        <li>
          <span className="contact-icon" style={{color:"white"}} >&#x260E;</span> Phone:  <a href="tel:+92514592013">  +92 514 592013</a>
        </li>
        <li>
          <span className="contact-icon" style={{color:"white"}}>&#x1F4F1;</span> Mobile:  <a href="tel:+923066664480">  +92 306 6664480</a>
        </li>
      </ul>
      <h2 className="working-hours-title">Working Hours</h2>
      <p>Monday - Friday - 09am to 06pm</p>
      <p>Saturday - Sunday - Closed</p>

    </div>
  );
};

export default ContactInfoContainer;
