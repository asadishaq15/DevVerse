import React from 'react';
import { Link } from 'react-router-dom';
import Clients from '../../../../components/clients/clients';
import onlineStore from "../../../../assets/online store.gif";
import corporate from "../../../../assets/corporate website 1 (1).gif";
import portal from "../../../../assets/portal.gif";
import landingPage from "../../../../assets/landing.gif";
import responsive from "../../../../assets/responsive site.gif";
import '../../categories.css'
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

const WebDevCategories = () => {
  const servicesData = [
    {
      title: 'Online store',
      description: 'A platform for an online sales business. It requires the development of a complex structure, several mandatory sections ("Delivery", "Payment", "Contacts", etc). Consists of dozens of pages with descriptions of products requiring promotion.',
      imageUrl: onlineStore
    },
    {
      title: 'Corporate website',
      description: 'Web-based platform for document management, personnel management and information exchange between branches and remote units. Requires exclusive design and 24/7 support.',
      imageUrl:corporate,
    },
    {
      title: 'Portal',
      description: 'A large Internet resource with a large amount of information. Optimal for publishing news articles, sports reports, announcements. Attracts a lot of visitors and provides passive income by placing ads on the most visited pages.',
      imageUrl: portal
    },
    {
      title: 'Landing',
      description: 'A one-page website to inform potential buyers about the benefits of the product. An autonomous advertising resource requiring a catchy design and quality content.',
      imageUrl: landingPage
    },
    {
      title: 'Responsive site',
      description: 'A resource that provides the correct display of information on any devices (smartphones, tablets). Attracts mobile users, increases business competitiveness.',
      imageUrl: responsive,
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
            <Link to="/request-quote" className='View-caseStudy'>
              <button className="view-case-study-button" >GET FREE QUOTE</button>
            </Link>
          </div>
          <Clients />
    </div>
  );
};

export default WebDevCategories;
