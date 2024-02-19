
import React from 'react';
import "./seoServices.css"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Clients from '../../../components/clients/clients';
import SeoCategories from './categories/seoCategories';

const SeoServices  = () => {
  return (
    <div className="Seo-Services-page">
   
      <div className="breadcrumb-container">
        <div className="breadcrumb-heading">
          <Typography variant="h1">Best SEO Services</Typography>
        </div>
        <div className="breadcrumb-text">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" style={{fontSize:"15px"}}>
            <strong>Home</strong>
          </Link>
          <Typography color="textPrimary" style={{fontSize:"13px", color:"black"}}>SEO Services</Typography>
        </Breadcrumbs>
        </div>

      </div>

      <div className="Seo-Services-container">
        <h2>Our SEO Services</h2>
        <p>
        DevVerse Technologies, an SEO agency that offers digital marketing services to get qualitative and targeted traffic to help you achieve your business goals. 
        In DevVerse Technologies our team of experts is here to provide the best SEO Services Pakistan to meet your specific marketing needs within your niche sector. 
        We pride ourselves on offering a full range of SEO services Pakistan that integrates all the different steps of quality user acquisition, as you can discover below:
       </p>
       <div className="Iphone-Apps-Image-container">
            <img src="https://esolz.net/wp-content/uploads/2021/04/CMS-Web-Development.png" alt="CMS Image" />
          </div>
      
      </div>
        <div className="Natural-SEO-container">
        <div className="Natural-SEO-content">
          <div className="Natural-SEO-Text-container">
            <h2>Why choose Natural SEO</h2>
            <p>As an experienced SEO agency, at SEO Natural we offer you all the SEO services necessary to make your online adventure a success: natural web positioning, comprehensive SEO advice, link baiting, auditing, content marketing, and much more. Count on us so that we can ensure that your aspirations in the global network market are fulfilled once and for all; our years of commitment in the sector and with our clients guarantee us as a quality SEO company. Do not hesitate and consult your needs with us without obligation.</p>
  
            <h2>Another Big Adaptation Job</h2>
            <p>Changes in search engine algorithms require constant adaptation. 
                Google constantly updates its algorithms to improve its response to customer queries.
                 This creates uncertainty for SEO experts who must adjust their strategies accordingly.</p>
            
            <h2>Our Core Values</h2>
            <ul>
                <li>Professionalism</li>
                <li>Experience</li>
                <li>Excellent Customer Service</li>
                <li>Warranty</li>
            </ul>
            
            <h2>Recommendations are good, putting them in place is better!</h2>
            <p>To implement recommendations effectively, clear communication and 
                collaboration are essential. Whether the SEO agency directly intervenes 
                on the site or provides recommendations for implementation, it's crucial 
                to ensure that the recommendations are actually executed for desired results.</p>
             <p>Regular and constructive communication between the SEO agency and you, 
                the client, is essential for building trust and achieving success.</p>
          </div>
          {/* Second sub-container */}
          
          </div>
        </div>
        <SeoCategories/>
           <div className="button-wrapper">
            <Link to="/case-study" className='View-caseStudy'>
              <button className="view-case-study-button" >GET FREE QUOTE</button>
            </Link>
          </div>
          <Clients />
   

    </div>
  );
};

export default SeoServices ;
