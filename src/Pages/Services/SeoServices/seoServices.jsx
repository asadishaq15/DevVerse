import React, { useEffect } from 'react';
import "./seoServices.css"
import Clients from '../../../components/clients/clients';
import SeoCategories from './categories/seoCategories';
import seo from "../../../assets/seoimg.webp"
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumbs/breadcrumb';

const SeoServices = () => {
  useEffect(() => {
    document.title = 'Best SEO Services';
  }, []);

  return (
    <div className="Seo-Services-page">
      <Breadcrumb page="Best SEO Services" />

      <div className="Seo-Services-container">
        <h2>Expert SEO Services for Boosting Online Visibility</h2>
        <p>
          At DevVerse Technologies, we are a leading SEO services, offering comprehensive digital marketing services to drive qualified and targeted traffic to your website. Our team of experts specializes in tailoring SEO strategies to meet your specific marketing needs and help you achieve your business goals.
        </p>
        <div className="Iphone-Apps-Image-container">
          <img src={seo} alt="SEO Services" />
        </div>
      </div>

      <div className="Natural-SEO-container">
        <div className="Natural-SEO-content">
          <div className="Natural-SEO-Text-container">
            <h2>Why Choose Natural SEO?</h2>
            <p>
              As an experienced SEO agency, we offer a comprehensive range of SEO services to ensure the success of your online venture. From natural web positioning and comprehensive SEO consultancy to link building, auditing, and content marketing, we have the expertise to fulfill your aspirations in the digital marketplace.
            </p>

            <h2>Adapting to Algorithm Changes</h2>
            <p>
              Search engine algorithms are constantly evolving, requiring SEO experts to adapt their strategies accordingly. At DevVerse, we stay ahead of the curve, continuously refining our approach to align with the latest algorithm updates and ensure your website remains visible and competitive.
            </p>

            <h2>Our Core Values</h2>
            <ul>
              <li>Professionalism</li>
              <li>Expertise</li>
              <li>Excellent Customer Service</li>
              <li>Guaranteed Results</li>
            </ul>

            <h2>Effective Implementation and Collaboration</h2>
            <p>
              Implementing SEO recommendations effectively requires clear communication and collaboration between our agency and your team. Whether we directly intervene on your site or provide guidance, we ensure that our recommendations are executed correctly to achieve desired results.
            </p>
            <p>
              Regular and constructive communication is essential for building trust and achieving success in our partnership.
            </p>
          </div>
        </div>
      </div>

      <SeoCategories />

      <div className="button-wrapper">
        <Link to="/request-quote" className='View-caseStudy'>
          <button className="view-case-study-button">GET FREE QUOTE</button>
        </Link>
      </div>

      <Clients />
    </div>
  );
};

export default SeoServices;