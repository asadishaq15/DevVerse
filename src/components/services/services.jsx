import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css'; 
import { Link } from 'react-router-dom';

const ServiceCard = ({  title, description, imageUrl ,path,aosDelay}) => {

  return (
    <div className="service-card" data-aos="fade-up" data-aos-delay={aosDelay}>
    <div className="card-content">
      <Link to={path}>{imageUrl && <img src={imageUrl} alt={title} className="image-width" />}</Link>
      <h6>
        <Link to={path} style={{ color: "#101010", fontFamily: "sans-serif", fontWeight: "600" }}>
          {title}
        </Link>
      </h6>
      <p>{description}</p>
    </div>
    <div className="card-footer">
      <button className="contact-button" data-aos="zoom-in" data-aos-delay={aosDelay + 10}> {/* Adjust delay as needed */}
        <Link to="/request-quote" style={{ color: 'white', fontWeight: "500" }}>CONTACT US</Link>
      </button>
    </div>
  </div>
  );
};


const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const servicesData = [
    {
   
      title: 'Web App Development',
      description: 'Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.',
      path: '/web-development',  
      imageUrl :'https://indoanalytica.com/static/images/Web-design-4.gif'
       },
    {
  
      title: 'Mobile App Development',
      description: 'We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.',
      path: '/mobile-apps',  
      imageUrl: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg'
    },
    {

      title: 'SEO',
      description: 'Enhance your online presence and reach your target audience with our comprehensive SEO services. Our strategies are tailored to boost your website visibility, drive organic traffic, and improve search engine rankings.',
      path: '/seo-services',  
      imageUrl: 'https://www.ecompmarketing.com/images/ecomp-images/seo-iso.png'
    },
    {

      title: 'CRM Softwares',
      description: 'Streamline your customer relationship management processes with our cutting-edge CRM software solutions. From lead management to customer support, our CRM platforms empower businesses to effectively manage interactions and build lasting relationships with their clients.',
      path: '/crm-softwares',  
      imageUrl: 'https://www.agilecrm.com/img/dashboard-new/dashboard.png'
    },
    {

      title: 'Graphic Designing',
      description: ' Elevate your brand identity and captivate your audience with our bespoke graphic design services. Our talented designers create visually stunning assets, including logos, brochures, and social media graphics, that effectively communicate your brand message and leave a lasting impression.',
      path: '/graphic-designing',  
      imageUrl: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Banner-5-Rising-Graphic-Designers-and-What-Sets-Them-Apart-1-1280x720.jpg'
    },
    {

      title: 'Digital Marketing',
      description: 'Drive your business growth and expand your online presence with our results-driven digital marketing strategies. From SEO and social media marketing to PPC advertising, we leverage the latest tools and techniques to attract, engage, and convert your target audience into loyal customers.',
      path: '/digital-marketing',  
      imageUrl: 'https://cdn.pixabay.com/photo/2020/12/09/03/10/digital-marketing-5816304_640.jpg'
    },
    {

      title: 'IOS Apps',
      description: 'Harness the power of iOS with our custom iOS app development services. Whether you are looking to create a sleek and user-friendly mobile application or optimize your existing iOS app, our experienced developers deliver seamless and intuitive solutions tailored to your specific needs.',
      path: '/ios-app-development',  
      imageUrl:'https://assets.isu.pub/document-structure/230623080427-d680d6d5af381aee170023077b29741c/v1/6b82b0c87d50f27cdb5ce8294c7a7860.jpeg'
    },
    {

      title: 'Android Apps',
      description: 'Reach a wider audience and maximize your market reach with our professional Android app development services. Our team of skilled developers designs and develops innovative Android applications that are scalable, reliable, and feature-rich, providing unparalleled user experiences.',
      path: '/android-app-development',  
      imageUrl: 'https://www.advansoft.ae/wp-content/uploads/2017/06/Android-Applications.jpg'
    },
    {

      title: 'ASO',
      description: ' Increase your app visibility and drive downloads with our specialized ASO services. Our proven optimization techniques ensure that your app stands out in crowded app stores, resulting in higher rankings, increased organic traffic, and improved conversion rates.',
      path: '/appstore-optimization',  
      imageUrl: 'https://media.licdn.com/dms/image/D4D12AQFw4CJfl7EUlA/article-cover_image-shrink_600_2000/0/1699339845928?e=2147483647&v=beta&t=xl56shpTPLQL683-zWrgVW6UX8teCCZugyLWiZx6nbk'
    },
  
  ];

  return (
    <div className="services-container">
      <div className="container">
        <div className="services-row">
          <div id="service">
            <div className='Services-Heading-container' data-aos="fade-down">
                <h2>OUR <strong>SERVICES</strong></h2>
              </div>
           
          </div>

          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              iconClass={service.iconClass}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              path={service.path}
              aosDelay={(index + 1) * 50}
            />
          ))}
    
        </div>
      </div>
    </div>
  );
};

export default Services;
