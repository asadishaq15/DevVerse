import React, { useEffect } from 'react';
import "./digitalMarketing.css"
import MarketingCategories from './categories/marketingCategorie';
import Clients from '../../../components/clients/clients';
import seo from "../../../assets/SEOimg2.webp"
import smo from "../../../assets/images.webp"
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumbs/breadcrumb';

const DigitalMarketing = () => {
  useEffect(() => {
    document.title = 'Best Digital Marketing Agency in Pakistan';
  }, []);

  return (
    <div className="Digital-Marketing-page">
      <Breadcrumb page="Best Digital Marketing Services" />

      <div className="Digital-Marketing-container">
        <h2>Innovative Digital Marketing Solutions for Business Growth</h2>
        <p>
          At DevVerse, we are a leading digital marketing agency in Pakistan, offering cutting-edge solutions to propel your business towards success. Our team of experts specializes in various digital marketing strategies, including Search Engine Optimization (SEO), Social Media Optimization (SMO), and paid advertising campaigns. We understand the ever-evolving digital landscape and leverage the latest techniques to maximize your online visibility, engage your target audience, and drive tangible results.
        </p>
      </div>

      <div className="seo-container">
        <div className="seo-content">
          <div className="seo-Text-container">
            <h2>Search Engine Optimization (SEO) Services</h2>
            <p>
              Our expert SEO team utilizes advanced techniques and strategies to boost your website's search engine rankings, ensuring your business is easily discoverable to potential customers. With our comprehensive SEO services, we optimize your website's content, structure, and technical aspects, ensuring a seamless user experience and improved search visibility.
            </p>
          </div>
          {/* Second sub-container */}
          <div className="seo-Image-container">
            <img src={seo} alt="SEO Services" />
          </div>
        </div>
      </div>

      <div className="smo-container">
        <div className="smo-Image-container">
          <img src={smo} alt="Social Media Optimization" />
        </div>
        <div className="smo-Text-container">
          <h2>Social Media Optimization (SMO) and Marketing</h2>
          <p>
            Our skilled social media experts leverage the power of various platforms to amplify your brand's presence, engage with your audience, and drive targeted traffic to your website. With tailored social media strategies, we help you build a strong online community, increase brand awareness, and ultimately drive conversions and sales.
          </p>
        </div>
      </div>

      <MarketingCategories />

      <div className="marketing-strategies">
        <div className="marketing-strategies-content">
          <h2>Paid Search Advertising (SEA) and Web Analytics</h2>
          <p>
            In addition to organic SEO, we offer effective paid search advertising campaigns (SEA) to boost your visibility and drive targeted traffic. Our data-driven approach, combined with web analytics insights, ensures your campaigns are optimized for maximum impact and return on investment (ROI).
          </p>

          <h2>Content Marketing and Conversion Rate Optimization</h2>
          <p>
            Compelling content is the backbone of successful digital marketing campaigns. Our team of talented writers crafts engaging and informative content tailored to your industry and target audience. Furthermore, we employ Conversion Rate Optimization (CRO) strategies to enhance your website's performance, increasing the likelihood of visitors taking desired actions, such as making a purchase or submitting a lead form.
          </p>

          <h2>Comprehensive Digital Branding Strategies</h2>
          <p>
            At DevVerse, we understand the importance of building a strong digital brand presence. Our digital branding services encompass best practices, case studies, and cutting-edge techniques to establish and reinforce your brand identity across various digital channels, ensuring a consistent and memorable experience for your audience.
          </p>
        </div>
      </div>

      <div className="button-wrapper">
        <Link to="/request-quote" className='View-caseStudy'>
          <button className="view-case-study-button">GET FREE QUOTE</button>
        </Link>
      </div>

      <Clients />
    </div>
  );
};

export default DigitalMarketing;