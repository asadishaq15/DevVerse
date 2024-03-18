import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './clients.css'; // Your custom CSS file
import LR from "./clientLogos/lcr.png"
import jsconsultant from "./clientLogos/jsConsultants.png"
import veuloCars from "./clientLogos/veuloCars.png"
import SE from "./clientLogos/SaringEntp.png"
import ZahrawiCollege from "./clientLogos/college-logo.jpg"

const Clients = () => {
  const sliderRef = useRef(null);
  const clientLogos = [
    veuloCars,
    jsconsultant,
    ZahrawiCollege,
    LR,
    SE,
    ZahrawiCollege,
  ];

  const settings = {
    dots: false,
    infinite: true, // Ensure infinite looping
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <></>, // Hide default previous button
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="clients">
      <div className="container">
        <div className="section-header">
          <h4>Our Clients</h4>
          <div className="clients-owl-nav">
            <button className="Clients-owl-prev" onClick={handlePrevClick}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="Clients-owl-next" onClick={handleNextClick}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="clients-carousel">
          <Slider {...settings} ref={sliderRef}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="client-item">
                <img src={logo} alt={`Client Logo ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clients;
