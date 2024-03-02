import React from 'react';
import '../../categories.css'
import paidReference from "../../../../assets/paid referencing.gif";
import NaturalReferencing from "../../../../assets/natural referencing.gif";
import InboundMarketing  from "../../../../assets/inbound marketing.gif";

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

const MarketingCategories = () => {
  const servicesData = [
    {
        title: 'PAID REFERENCING',
        description: 'The SEO allows you to broadcast text ads with a link to your offer or your site in the search engine results. In this way your site will be artificially ranked well in the search engines and you will be charged a certain amount for each click on the part of a user.',
        imageUrl: paidReference,
      },
      {
        title: 'NATURAL REFERENCING',
        description: 'Most online purchases or contacts are made at some point in the Google box. If the content of your website is effective and turns your visitors into customers, this will greatly improve your ranking and your traffic. ',
        imageUrl: NaturalReferencing
      },
      {
        title: 'Inbound marketing',
        description: 'Attract new customers with an inbound marketing strategy. We can customize it according to your budget and help you take advantage of the most recent techniques that currently exist in inbound marketing.',
        imageUrl:InboundMarketing
      }
     
    
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

export default MarketingCategories;
