import React from 'react';
import "./webDevelopment.css"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import WebDevCategories from './categories/webDevCategories';

const WebDevelopmentPage = () => {
  return (
    <div className="web-development-page">
      {/* Breadcrumb with background image */}
      <div className="breadcrumb-container">
        {/* Material-UI Breadcrumbs */}
        <div className="breadcrumb-heading">
          <Typography variant="h1">Best Web Design and Development Services</Typography>
        </div>
        <div className="breadcrumb-text">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" style={{fontSize:"15px"}}>
            <strong>Home</strong>
          </Link>
          <Typography color="textPrimary" style={{fontSize:"13px"}}>Web Development Services</Typography>
        </Breadcrumbs>
        </div>

      </div>

      <div className="web-development-container">
        <h2>Code For The Next Level Development</h2>
        <p>
          DevVerse, a very well renowned web development company currently working in Pakistan. 
          We’re bunch of guys who’re adept and skillful web designers and we are master of this field. 
          Site advancement has been an issue and we as web Development Company working enthusiastically to come up with first-rate solution.
           We’ll keep on working until we get the job done. Here at DevVerse, you’ll get any web of your choice and it’s our responsibility to give you our best through our website maintenance services.
        </p>
        
        <h2>Professional And Leading Web Design And Development Company</h2>
        <p>
          DevVerse Technologies is one of the leading web design and development company in Pakistan.
           we provide tailored end-to-end web design & development services, which are rich in creativity, functional,
            and highly flexible for your unique needs and preferences.

          We offer extraordinary services in web designing to create brand’s visibility.
           Our work helped us gain the recognition as best web design company and managed to create space in international industry as well.

          Our experts create most affordable web design and development services considering the size of every business.
           We hire the best resources to help you create flexible, user friendly, and trendsetting website in the market. 
           DevVerse Technologies excells in web designing and development because we dive into customers’ 
           business strategy and requirements to help create the competitive online presence.
        </p>
      </div>
        <div className="CMS-container">
        <div className="cms-content">
          <div className="cms-Text-container">
            <h2>Content Management System</h2>
            <p>
              Content management system (CMS) is considered a difficult task to maintain but we’re making it real simple 
              by implementing our own techniques. Here our clients can survey and revise the content generated and this 
              has done because of our web developers. By CMS web development, you can reach out to us.
            </p>
          </div>
          {/* Second sub-container */}
          <div className="cms-Image-container">
            <img src="https://esolz.net/wp-content/uploads/2021/04/CMS-Web-Development.png" alt="CMS Image" />
          </div>
          </div>
        </div>

        <div className="CRM-container">
        <div className="crm-Image-container">
                <img src="https://esolz.net/wp-content/uploads/2021/04/CMS-Web-Development.png" alt="CRM Image" />
              </div>
              <div className="crm-Text-container">
                <h2>Customer Relationship Management (CRM)</h2>
                <p>
                  A customer relationship management (CRM) is a tool allowing you to have better management of your business contacts. It offers the possibility of having a panel of marketing solutions in order to capture and build customer loyalty to your brand. Right now, a very good factor and a guarantee of reputation for a company is to ensure a unique relationship with its customers. At Elexoft, we set up a CRM based on your activity by defining the indicators that will be important to take into account. You will be able to process and analyze data relating to your customers and define good business planning.
                </p>
                <h2>Our CRM expertise</h2>
                <ul>
                  <li>After Sales</li>
                  <li>Assessment KPI's</li>
                  <li>Identification of Customer Needs</li>
                  <li>Customer Relationship</li>
                  <li>Improved Sales</li>
                  <li>Prospect Contact Base</li>
                  <li>Customer Follow-up</li>
                  <li>Marketing</li>
                </ul>
              </div>
            
             
            </div>
            <div className="Customization-container">
                <div className="customization-content">
                  <div className="customization-Text-container">
                    <h2>Wordpress, Joomla, Shopify Customization</h2>
                    <p>
                      If you’re looking for Wordpress or Joomla, trust us that we’ve got it covered for you. 
                      In case you’re having any sort of inconvenience in your project or assignment, our web developers can make this job really easy for you. 
                      We’re a web developing company who is bringing much needed advancement in wordpress, joomla and shopify customization and we’re doing it in style. 
                      Through our shopify tool, you can sell your administration on your web and we can guide as best web development company. 
                      We’ll help you by all means in starting your any sort of entrepreneurship business and through our website maintenance services; 
                      you can make your business a big thing in a span of couple of weeks/months. In today’s world it is really hectic and tough to start an online 
                      merchandise store because you need absolute knowledge to get the ball rolling. But in our case, we can simply make it happen for you.
                    </p>
                  </div>
                  {/* Second sub-container */}
                  <div className="customization-Image-container">
                    <img src="https://esolz.net/wp-content/uploads/2021/04/CMS-Web-Development.png" alt="Customization Image" />
                  </div>
                </div>
              </div>
          <WebDevCategories/>
    </div>
  );
};

export default WebDevelopmentPage;
