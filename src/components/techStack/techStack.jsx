import React, { useEffect, useRef } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './techStack.css'; // Create a corresponding CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css';
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
const TechStackSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const techStackLogos = [


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
