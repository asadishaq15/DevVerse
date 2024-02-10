import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './techStack.css'; // Create a corresponding CSS file for styling

const TechStackSlider = () => {
  const techStackLogos = [
    // Add your tech stack logos as image URLs
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png',
    'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png',
    'https://cdn.pixabay.com/photo/2023/05/09/10/40/robot-7981037_1280.png',
    'https://cdn.pixabay.com/photo/2022/01/16/17/24/wordpress-6942722_1280.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLp5rYg9kwzmedWKFxDBozZ0l17isTFtd32FjyA8qUg&s',
    'https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png'
    // Add more logos as needed
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
    <div className="tech-stack-slider-container">
      <h2 className="tech-stack-heading">We are working on these Technologies</h2>
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
  );
};

export default TechStackSlider;
