import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './clients.css'; // Create a corresponding CSS file for styling
import LR from "./clientLogos/LR.jpg"
import jsconsultant from "./clientLogos/jsconsultant.jpg"
import veuloCars from "./clientLogos/veuloCars.jpg"
import SE from "./clientLogos/SE.jpg"
import ZahrawiCollege from "./clientLogos/college-logo.jpg"
const Clients = () => {
  const clientLogos = [
    
   LR,
   jsconsultant,
   veuloCars,
   SE,
   ZahrawiCollege

  ];

  const owlRef = useRef(null);

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
   
  };

  const handlePrevClick = () => {
    owlRef.current.prev();
  };

  const handleNextClick = () => {
    owlRef.current.next();
  };


  return (
    <div className="clients" >
      <div className="container">
        <div className="section-header-1">
          <h4>Our Clients</h4>
          <div className="recentProjects-owl-nav" >
          <button className="owl-prev" onClick={handlePrevClick}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="owl-next" onClick={handleNextClick}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        </div>
        <div className="clients-carousel-container">
          <OwlCarousel {...options} ref={owlRef}>
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
