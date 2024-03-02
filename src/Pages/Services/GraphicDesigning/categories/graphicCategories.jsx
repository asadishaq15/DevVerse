import React from 'react';
import { Link } from 'react-router-dom';
import Clients from '../../../../components/clients/clients';
import UIUX  from "../../../../assets/ui ux design.gif";
import SiteDesign  from "../../../../assets/online store.gif";
import MobileAppDesign  from "../../../../assets/mobile app design.gif";
import logoDesign from "../../../../assets/logo design.gif"
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

const GraphicCategories = () => {
  const servicesData = [
    {
        title: 'UI/UX design development',
        description: 'We do design based on a long-term study of user behavior on sites of various subjects. This allows you to naturally bring a person to the desired action.',
        imageUrl: UIUX
      },
      {
        title: 'Site design',
        description: 'We take your corporate identity as a basis, so that loyal users remember it and want to return to an aesthetic and convenient resource.',
        imageUrl: SiteDesign
      },
      {
        title: 'Mobile app design',
        description: 'The attractive design of mobile applications makes them more convenient for users, and therefore more effective for you. Elexoft is developing an application design for iOS and Android, which helps bring new customers and solve other business problems.',
        imageUrl: MobileAppDesign
      },
      {
        title: 'Logo Design',
        description: 'We immerse ourselves in the business of customers, study the target audience, and clearly indicate the marketing task that the logo should solve. Only after that we develop the concept.',
        imageUrl: logoDesign
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
