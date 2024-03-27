import React, { useEffect } from 'react';
import "./webDevelopment.css"
import WebDevCategories from './categories/webDevCategories';
import CMS from "../../../assets/CMS-Web-Development.webp";
import CRM from "../../../assets/CRM-handdrawn.webp";
import ecommerce from "../../../assets/E-Commerce.webp";
import Breadcrumb from '../../../components/Breadcrumbs/breadcrumb';

const WebDevelopmentPage = () => {
  useEffect(() => {
    document.title = 'Best Web Design and Development Company in Pakistan';
  }, []);

  return (
    <div className="webDevelopmentMain">
      <div className="web-development-page">
        {/* Breadcrumb with background image */}
        <Breadcrumb page="Best Web Development" />

        <div className="web-development-container">
          <h2>Cutting-Edge Web Development Services</h2>
          <p>
            DevVerse is a leading web development company based in Pakistan, offering cutting-edge solutions for businesses of all sizes. Our team of skilled web developers and designers specializes in creating high-performance, user-friendly, and visually stunning websites tailored to your unique needs.
          </p>

          <h2>Professional Web Design and Development Experts</h2>
          <p>
            At DevVerse, we pride ourselves on being one of the top web design and development companies in Pakistan. Our end-to-end services encompass creativity, functionality, and flexibility, ensuring your website stands out in the digital landscape. Our affordable web design and development solutions cater to businesses of all scales, leveraging the latest trends and technologies to create a competitive online presence.
          </p>
        </div>

        <div className="CMS-container">
          <div className="cms-content">
            <div className="cms-Text-container">
              <h2>Content Management System (CMS) Development</h2>
              <p>
                Our expert web developers specialize in building robust and user-friendly Content Management Systems (CMS) that simplify content creation, management, and publishing. With our custom CMS solutions, you can easily update and maintain your website's content without any technical expertise.
              </p>
            </div>
            {/* Second sub-container */}
            <div className="cms-Image-container">
              <img src={CMS} alt="CMS Web Development" />
            </div>
          </div>
        </div>

        <div className="CRM-container">
          <div className="crm-Image-container">
            <img src={CRM} alt="CRM Web Development" />
          </div>
          <div className="crm-Text-container">
            <h2>Customer Relationship Management (CRM) Integration</h2>
            <p>
              Enhance your customer experience with our seamless Customer Relationship Management (CRM) integration services. Our CRM solutions enable you to manage customer interactions, streamline sales processes, and gain valuable insights for better business planning and customer retention.
            </p>
            <h2>Our CRM Expertise</h2>
            <ul>
              <li>After-Sales Support</li>
              <li>KPI Tracking and Analysis</li>
              <li>Customer Needs Identification</li>
              <li>Customer Relationship Management</li>
              <li>Sales Optimization</li>
              <li>Prospect Database Management</li>
              <li>Customer Follow-up Automation</li>
              <li>Marketing Automation</li>
            </ul>
          </div>
        </div>

        <div className="Customization-container">
          <div className="customization-content">
            <div className="customization-Text-container">
              <h2>WordPress, Joomla, and Shopify Customization</h2>
              <p>
                Whether you need a custom WordPress, Joomla, or Shopify website, our web development team has the expertise to deliver tailored solutions that meet your unique requirements. From e-commerce platforms to content management systems, we offer comprehensive customization services to ensure your website stands out and delivers an exceptional user experience.
              </p>
            </div>
            {/* Second sub-container */}
            <div className="customization-Image-container">
              <img src={ecommerce} alt="E-commerce Web Development" />
            </div>
          </div>
        </div>

      </div>
      <WebDevCategories />
    </div>
  );
};

export default WebDevelopmentPage;