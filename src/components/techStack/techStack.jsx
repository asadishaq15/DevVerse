import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './techStack.css'; // Create a corresponding CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css';

const TechStackSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const techStackLogos = [
    // Add your tech stack logos as image URLs
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png',
    'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png',
    'https://cdn.pixabay.com/photo/2023/05/09/10/40/robot-7981037_1280.png',
    'https://cdn.pixabay.com/photo/2022/01/16/17/24/wordpress-6942722_1280.png',
    'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
    'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
    'https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png',
    'data:image/jpeg;base64,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'
   
    
  ];

  const options = {
    items: 6, // Set the number of slides to show
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000, // Set the autoplay interval to 2 seconds
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
    nav: true, // Enable navigation
    navText: [
      '<i class="fas fa-chevron-left"></i>', // Left arrow (Font Awesome icon)
      '<i class="fas fa-chevron-right"></i>', // Right arrow (Font Awesome icon)
    ],
  };

  return (
    <div className="con-main" data-aos="fade-up">
    <h2 className="tech-stack-heading" data-aos="fadeInDown" >We are working on these <strong>Technologies</strong></h2>
    <div className="tech-stack-slider-container">
  
      <OwlCarousel {...options}>
        {techStackLogos.map((logo, index) => (
          <div key={index} className="slider-item">
            <div className="tech-logo-container">
              <img src={logo} alt={`Tech Logo ${index + 1}`} className="tech-logo" />
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
    </div>
  );
};

export default TechStackSlider;
