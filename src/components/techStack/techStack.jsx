import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './techStack.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import laravel from "../../images/laravel-2.svg";
import javascript from "../../images/javascript-1.svg";
import html from "../../images/html-1.svg";
import css from "../../images/css-3.svg";
import react from "../../images/react-2.svg";
import node from "../../images/nodejs.svg";
import nextjs from "../../images/next-js.svg";
import c from "../../images/c--4.svg";
import tailwindcss from "../../images/tailwind-css-2.svg";
import mySQL from "../../images/mysql-logo.svg";
import mongoDB from "../../images/mongodb-icon-1.svg";
import php from "../../images/php-1.svg";
import android from "../../images/android-6.svg";
import ios from "../../images/ios-2.svg";

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

  const sliderRef = useRef(null);

  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="con-main" data-aos="fade-up">
      <h2 className="tech-stack-heading" data-aos="fadeInDown">
        We are working on these <strong>Technologies</strong>
      </h2>
      <div className="tech-stack-slider-container">
        <Slider {...settings} ref={sliderRef}>
          {techStackLogos.map((logo, index) => (
            <div key={index} className="slider-item">
              <div className="tech-logo-container">
                <img src={logo} alt={`Tech Logo ${index + 1}`} className="tech-logo" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TechStackSlider;
