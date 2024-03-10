import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './clients.css'; // Your custom CSS file
import LR from "./clientLogos/lapsoride.png"
import jsconsultant from "./clientLogos/jsconsultant.png"
import veuloCars from "./clientLogos/veuloCars.jpg"
import SE from "./clientLogos/Saring.png"
import ZahrawiCollege from "./clientLogos/college-logo.jpg"

const Clients = () => {
  const clientLogos = [
    veuloCars,
    jsconsultant,
    ZahrawiCollege,
    LR,
    SE
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  return (
    <div className="clients" >
      <div className="container">
        <div className="section-header">
          <h4>Our Clients</h4>
        </div>
        <div className="clients-carousel">
          <Slider {...settings}>
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
