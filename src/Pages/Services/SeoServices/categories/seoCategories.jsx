import React from 'react';
import '../../categories.css'
import Clients from '../../../../components/clients/clients';

const CategoryCard = ({ title, description }) => {
  return (
    <div className="categories-card">
      <div className="card-content">
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

const SeoCategories = () => {
  const servicesData = [
    {
        title: 'Local SEO Services',
        description: 'Personalized services to increase the local presence of your physical business in search engines. Promote your store or establishment on Google Maps and Street View.'
      },
      {
        title: 'Search Engine Optimization',
        description: 'We adapt to your needs and present customized proposals based on your niche industry to achieve the highest ranking.'
      },
      {
        title: 'Google Penalty Recovery',
        description: 'We are here to assist you in the process of recovering your ticket to get your traffic and rankings back.'
      },
      {
        title: 'Content Marketing',
        description: 'Engage with your target audience by creating excellent, original, and unique, and search engine optimized content.'
      },
      {
        title: 'SEO audits',
        description: 'We audit and make the necessary recommendations for your SEO services strategy. Our Free SEO Analysis includes the keyword, technical and competitor audits.'
      },
      {
        title: 'Link Building',
        description: 'Unleash your backlink profile with custom Off-Page SEO services in Pakistan to rank higher on search engine results pages.'
      },
      {
        title: 'Social Media Marketing',
        description: 'An effective Social Marketing plan can help you establish a positive connection with your audience and increase your brand\'s reputation and recognition.'
      },
      {
        title: '360º Virtual Tour',
        description: 'An all-inclusive 360º service to boost your physical space in search engines and thus make it easier for potential customers to discover your business.'
      },
      {
        title: 'SEO On-Page',
        description: 'Our services cover all aspects of On-Page optimization, from encoding to URL configuration. We are here to help your site get better indexed and crawled.'
      },
      {
        title: 'PPC Campaign Management',
        description: 'Pay-per-click campaigns have a direct impact on your traffic and give your website more exposure, giving you a chance to reach the top of the SERPs'
      },
      {
        title: 'App Store optimization',
        description: 'ASO improves application visibility and performance in online stores. ASO\'s strategy attracts organic results and increases brand exposure to users.'
      },
      {
        title: 'Google Shopping',
        description: 'Google Shopping Ads allows e-commerce sites to promote their inventory online by increasing the number of visits to their websites and physical stores.'
      },
      {
        title: 'Google Grants Management',
        description: 'Google Grants is designed to get free publicity for your nonprofit organization or association.'
      },
      {
        title: 'E-Reputation Management',
        description: 'To keep your brand and your website with the best possible online reputation.'
      },
      {
        title: 'Wikipedia optimization',
        description: 'We create or optimize your Wikipedia page. For brands or personalities, we improve their visibility and credibility.'
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
            />
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default SeoCategories;
