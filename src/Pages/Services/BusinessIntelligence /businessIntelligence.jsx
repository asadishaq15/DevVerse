import React from 'react';
import "./businessIntelligence.css"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Clients from '../../../components/clients/clients';

const BusinessIntelligence  = () => {
  return (
    <div className="Business-Intelligence-page">
   
      <div className="breadcrumb-container">
        <div className="breadcrumb-heading">
          <Typography variant="h1">Business Intelligence Services</Typography>
        </div>
        <div className="breadcrumb-text">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" style={{fontSize:"15px"}}>
            <strong>Home</strong>
          </Link>
          <Typography color="textPrimary" style={{fontSize:"13px"}}>Business Intelligence Services</Typography>
        </Breadcrumbs>
        </div>

      </div>

      <div className="Business-Intelligence-container">
        <h2>Intelligence Analysis To Maximize Business Efficiency</h2>
        <p>
        Making effective and productive marketing strategies is like a daily task for Elexoft. 
        Through our business intelligence tools we make sure to grow your business and take it to next level.
         Elexoft is very selective when it comes to BI services. Our marketing master plans are very cost effective as well as customer friendly and through these techniques you will see your business reach another level in a very short span. We use latest technological methods and instruments and making significant progress in the field of business which is need of hour. We are known as one of the leading most business intelligence services in Pakistan and we can make things happen at will.
        </p>
     
      
      </div>
        <div className="BI-Services-container">
        <div className="BI-Services-content">
          <div className="BI-Services-Text-container">
            <h2>BI Services We Offer</h2>
            <p>
            We gather data and arrange in a mechanized form and by this business strategy, 
            we enhance your profit and business outcome. We’re specialized when it comes to computerized
             dashboard and we always keep in mind the comfort of our clients. Our BI services solution has
              brought much needed innovation on board is our primary goal and we’re consistently implementing 
              effective strategies and results are beyond expectations. Our entrepreneurship skills are 
              accepted worldwide and our BI service is top ranked in Pakistan. Our team is very much functional 
              as far as marketing analysis is concerned. Through our marketing tools, we have promoted many 
              organizations and their business has reached to a level where you can just think of reaching with
               your business. If you want to expand your business and you’re looking for competent and potent 
               techniques, Elexoft can be your jack of all trade and we’re master of everything. Our team is 
               focused to make your business a sensation and you’re just a step away for making your game professional
            </p>
          </div>
          {/* Second sub-container */}
          <div className="Iphone-Apps-Image-container">
            <img src="https://esolz.net/wp-content/uploads/2021/04/CMS-Web-Development.png" alt="CMS Image" />
          </div>
          </div>
        </div>

           <div className="button-wrapper">
            <Link to="/case-study" className='View-caseStudy'>
              <button className="view-case-study-button" >GET FREE QUOTE</button>
            </Link>
          </div>
          <Clients />
   

    </div>
  );
};

export default BusinessIntelligence ;
