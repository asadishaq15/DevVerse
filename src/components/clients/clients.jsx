import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './clients.css'; // Create a corresponding CSS file for styling
import laravel from "../../images/laravel-2.svg"
import javascript from "../../images/javascript-1.svg"
import html from "../../images/html-1.svg"
import css from "../../images/css-3.svg"
import react from "../../images/react-2.svg"
import node from "../../images/nodejs.svg"
import nextjs from "../../images/next-js.svg"
import c from "../../images/c--4.svg"
import tailwindcss from "../../images/tailwind-css-2.svg"
import mySQL from "../../images/mysql-logo.svg"
import mongoDB from "../../images/mongodb-icon-1.svg"
import php from "../../images/php-1.svg"
import android from "../../images/android-6.svg"
import ios from "../../images/ios-2.svg"

const Clients = ({ fullWidth }) => {
  const clientLogos = [
    
    laravel,
    javascript,
    html,
    css,
    react,
    node,
    nextjs,
    c,
    tailwindcss,
    mySQL,
    mongoDB,
    php,
    android,
    ios
  ];

  const options = {
    items: 6, // Set the number of slides to show
    loop: true,
    margin: 20,
    dots: false, // Disable default dots
    autoplay: true,
    autoplayTimeout: 3000, // Set the autoplay interval to 3 seconds
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

  const containerStyle = fullWidth ? {maxWidth: '100vw', maxWidth:'100%' } : {};

  return (
    <div className="clients" style={containerStyle}>
      <div className="container">
        <div className="section-header-1">
          <h4>Our Clients</h4>
        </div>
        <div className="clients-carousel-container">
          <OwlCarousel {...options}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="client-item">
                <img src={logo} alt={`Client Logo ${index + 1}`} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Clients;
