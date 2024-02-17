import React from 'react';
import './categories.css';

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

const Categories = () => {
  const servicesData = [
    {
      title: 'Online store',
      description: 'A platform for an online sales business. It requires the development of a complex structure, several mandatory sections ("Delivery", "Payment", "Contacts", etc). Consists of dozens of pages with descriptions of products requiring promotion.',
      imageUrl: 'https://indoanalytica.com/static/images/Web-design-4.gif'
    },
    {
      title: 'Corporate website',
      description: 'Web-based platform for document management, personnel management and information exchange between branches and remote units. Requires exclusive design and 24/7 support.',
      imageUrl: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg'
    },
    {
      title: 'Portal',
      description: 'A large Internet resource with a large amount of information. Optimal for publishing news articles, sports reports, announcements. Attracts a lot of visitors and provides passive income by placing ads on the most visited pages.',
      imageUrl: 'https://www.ecompmarketing.com/images/ecomp-images/seo-iso.png'
    },
    {
      title: 'Landing',
      description: 'A one-page website to inform potential buyers about the benefits of the product. An autonomous advertising resource requiring a catchy design and quality content.',
      imageUrl: 'https://www.agilecrm.com/img/dashboard-new/dashboard.png'
    },
    {
      title: 'Responsive site',
      description: 'A resource that provides the correct display of information on any devices (smartphones, tablets). Attracts mobile users, increases business competitiveness.',
      imageUrl: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Banner-5-Rising-Graphic-Designers-and-What-Sets-Them-Apart-1-1280x720.jpg'
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
    </div>
  );
};

export default Categories;
