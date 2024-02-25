import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import companyLogo from "../../images/CompanyLogo.png"
import 'aos/dist/aos.css';
import './welcomeMessage.css'; 
import Clients from '../clients/clients';

const WelcomeMessage = () => {
    useEffect(() => {
        AOS.init({ duration: 400 }); 
    }, []);

    return (
      <div className="welcome-container">
      <div className="welcome-content" >
        <div className="logo-and-message" data-aos="fade-left">
          <div className="logo-container">
            <img src='icon deVerse.png' alt="Company Logo" className="logo" />
          </div>
          <div className="text-container">
            <h1 className="welcome-heading">Welcome to DevVerse – Fastest Growing IT Company</h1>
            <p className="welcome-description">
              DevVerse Technologies is an IT Software Company founded in Sep 2021 in Pakistan. 
              We are offering multiple services in Website Development, Graphic Designing, Digital Marketing,
              and Mobile Apps Development. We make CMS, CRM and provide ERP solutions.
              DevVerse is a top software house in Pakistan and also a registered company in Pakistan. 
              Additional services that we provide include website Designing, API's Development, 
              SEO Services and IOS app development. We have highly experienced web developers who have successfully
              launched various huge projects and proved their skills in many projects. We are responsible for the working,
              and we try to keep the best relationship with our customers. As a Leading Software house in Pakistan, 
              We have designed hundreds of Websites, Mobile Apps, Logos and Icons for our clients with a unique research-based process. Our software house is spreading the best services in the industry of IT from last three years.
            </p>
          </div>
        </div>
        <div className="buttons-container" data-aos="fade-up">
          <div className="button-wrapper">
            <Link to="/testimonials" className='Read-testimonials'>
              <button className="read-testimonials-button">Read Testimonials</button>
            </Link>
          </div>
          <div className="button-wrapper">
            <Link to="/case-study" className='View-caseStudy'>
              <button className="view-case-study-button" style={{background:"transparent", color:"#007bff",border:"2px solid #007bff"}}>View Case Study</button>
            </Link>
          </div>
        </div>
    
      </div>
    </div>
    );
};

export default WelcomeMessage;


