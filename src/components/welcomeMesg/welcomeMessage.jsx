import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import icon from "../../images/companyIcon.png"
import 'aos/dist/aos.css';
import './welcomeMessage.css'; 

const WelcomeMessage = () => {
    useEffect(() => {
        AOS.init({ duration: 400 }); 
    }, []);

    return (
      <div className="welcome-container">
      <div className="welcome-content" >
        <div className="logo-and-message" data-aos="fade-left">
          <div className="logo-container">
            <img src={icon} alt="Company Logo" className="logo" />
          </div>
          <div className="text-container">
            <h1 className="welcome-heading">Welcome to DevVerse – Fastest Growing IT Company</h1>
            <p className="welcome-description">
            DevVerse Technologies, founded in September 2021 in Pakistan, is a pioneering IT firm committed to delivering exceptional digital solutions. Specializing in AI-integrated websites, web apps, mobile apps, CRM development, and e-commerce solutions, we empower brands to thrive online. Our expertise extends to captivating 3D UI/UX designs crafted for superior user experiences.

            As a premier software house in Pakistan, we prioritize excellence and client satisfaction. With a team of highly skilled professionals, we've successfully executed numerous large-scale projects, showcasing our expertise in the field. Additionally, we offer bespoke services like API development, SEO, and iOS app development, ensuring comprehensive support for diverse needs.

            At DevVerse, we prioritize strong client relationships, fostering open communication and collaboration throughout projects. Over the past three years, we've delivered unparalleled services, designing hundreds of websites, mobile apps, logos, and icons through meticulous research-driven processes.

            Choose DevVerse Technologies for cutting-edge digital solutions that exceed expectations and propel your business to new heights in the digital landscape
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


