import React from 'react';
import './appCategories.css';
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

const AppCategories = () => {
  const servicesData = [
    {
        title: 'NATIVE APPLICATION',
        description: 'A native application is a mobile application that is developed directly for an operating system (Android, iOS, etc). This application is generally built in the language specific to the system. ',
        imageUrl: 'https://indoanalytica.com/static/images/Web-design-4.gif'
      },
      {
        title: 'MOBILE WEB APPLICATION',
        description: 'The mobile web application is a thin client. Long neglected in favor of the native application, it is back in force with the development of HTML5 and CSS3 standards which will improve the user experience and offer more richness and functionality on mobile.',
        imageUrl: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg'
      },
      {
        title: 'HYBRID APPLICATION',
        description: 'A hybrid application combines the use of HTML5, JavaScript and CSS web technologies which are directly encapsulated in a native application. This allows you to benefit from all the functionalities of the mobile terminal and to distribute the application.',
        imageUrl: 'https://www.ecompmarketing.com/images/ecomp-images/seo-iso.png'
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

export default AppCategories;
