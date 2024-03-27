import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css'; 
import { Link } from 'react-router-dom';
import WebDevelopment from "../../assets/WebDevelopment.gif"
import MobileApps from "../../assets/MobileAppsDev.png"
import SEOServices from "../../assets/seo-services.webp"
import CRMDev from "../../assets/CRM.webp"
import GraphicDesigning from "../../assets/GraphicDesigning.jpg"
import DigitalMarketing from "../../assets/digital-marketing-5816304_640.webp"
import IOSApps from "../../assets/IOSDevelopment.png"
import AndroidApps from "../../assets/Android-Applications.webp"
import ASO from "../../assets/AppStoreOpt.png"
import headingBackground from "../../assets/ourServices.jpg"

const ServiceCard = ({  title, description, imageUrl ,path,aosDelay}) => {

  return (
    <div className="service-card" data-aos="fade-up" data-aos-delay={aosDelay}>
    <div className="service-card-content">
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
  useEffect(() => {
    document.title = 'Services'; // Set the desired title
  }, []);

  const servicesData = [
    {
   
      title: 'Web App Development',
      description: 'Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.',
      path: '/web-development',  
      imageUrl :WebDevelopment
       },
    {
  
      title: 'Mobile App Development',
      description: 'We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.',
      path: '/mobile-apps',  
      imageUrl: MobileApps
    },
    {

      title: 'SEO',
      description: 'Enhance your online presence and reach your target audience with our comprehensive SEO services. Our strategies are tailored to boost your website visibility, drive organic traffic, and improve search engine rankings.',
      path: '/seo-services',  
      imageUrl:SEOServices
    },
    {

      title: 'CRM Softwares',
      description: 'Streamline your customer relationship management processes with our cutting-edge CRM software solutions. From lead management to customer support, our CRM platforms empower businesses to effectively manage interactions and build lasting relationships with their clients.',
      path: '/crm-softwares',  
      imageUrl: CRMDev
    },
    {

      title: 'Graphic Designing',
      description: ' Elevate your brand identity and captivate your audience with our bespoke graphic design services. Our talented designers create visually stunning assets, including logos, brochures, and social media graphics, that effectively communicate your brand message and leave a lasting impression.',
      path: '/graphic-designing',  
      imageUrl: GraphicDesigning
    },
    {

      title: 'Digital Marketing',
      description: 'Drive your business growth and expand your online presence with our results-driven digital marketing strategies. From SEO and social media marketing to PPC advertising, we leverage the latest tools and techniques to attract, engage, and convert your target audience into loyal customers.',
      path: '/digital-marketing',  
      imageUrl: DigitalMarketing
    },
    {

      title: 'IOS Apps',
      description: 'Harness the power of iOS with our custom iOS app development services. Whether you are looking to create a sleek and user-friendly mobile application or optimize your existing iOS app, our experienced developers deliver seamless and intuitive solutions tailored to your specific needs.',
      path: '/ios-app-development',  
      imageUrl:IOSApps
    },
    {

      title: 'Android Apps',
      description: 'Reach a wider audience and maximize your market reach with our professional Android app development services. Our team of skilled developers designs and develops innovative Android applications that are scalable, reliable, and feature-rich, providing unparalleled user experiences.',
      path: '/android-app-development',  
      imageUrl: AndroidApps
    },
    {

      title: 'ASO',
      description: ' Increase your app visibility and drive downloads with our specialized ASO services. Our proven optimization techniques ensure that your app stands out in crowded app stores, resulting in higher rankings, increased organic traffic, and improved conversion rates.',
      path: '/appstore-optimization',  
      imageUrl: ASO
    },
  
  ];


  return (
    <div className="services-container">
    <div className="services-content-container">
      <div className="Services-Heading-container" data-aos="fade-down"
      
      style={{
      
        backgroundImage: `url(${headingBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
        
        }}>
        <h2>OUR <strong>SERVICES</strong></h2>
      </div>
  
      <div className="cards-container">
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
