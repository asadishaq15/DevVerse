import React from 'react';
import './graphicCategories.css';
import { Link } from 'react-router-dom';
import Clients from '../../../../components/clients/clients';

const CategoryCard = ({ title, description, imageUrl }) => {
  return (
    <div className="categories-card">
      <div className="card-content">
        <img src={imageUrl} alt={title} className="card-image" />
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

const GraphicCategories = () => {
  const servicesData = [
    {
        title: 'UI/UX design development',
        description: 'We do design based on a long-term study of user behavior on sites of various subjects. This allows you to naturally bring a person to the desired action.',
        imageUrl: 'https://indoanalytica.com/static/images/Web-design-4.gif'
      },
      {
        title: 'Site design',
        description: 'We take your corporate identity as a basis, so that loyal users remember it and want to return to an aesthetic and convenient resource.',
        imageUrl: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg'
      },
      {
        title: 'Mobile app design',
        description: 'The attractive design of mobile applications makes them more convenient for users, and therefore more effective for you. Elexoft is developing an application design for iOS and Android, which helps bring new customers and solve other business problems.',
        imageUrl: 'https://www.ecompmarketing.com/images/ecomp-images/seo-iso.png'
      },
      {
        title: 'Logo Design',
        description: 'We immerse ourselves in the business of customers, study the target audience, and clearly indicate the marketing task that the logo should solve. Only after that we develop the concept.',
        imageUrl: 'https://www.agilecrm.com/img/dashboard-new/dashboard.png'
      },
    
  ];

  return (
    <div className="categories-container">
      <div className="container">
        <div className="categories-row">
          {servicesData.map((service, index) => (
            <CategoryCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
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

export default GraphicCategories;
