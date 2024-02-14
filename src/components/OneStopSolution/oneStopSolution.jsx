import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './oneStopSolution.css';
import mockTemplate from "../../images/mockTemplate.jpg";

const OneStopSolution = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="container-main">
      {/* Heading */}
      <div className="heading-container">
        <h2 className="heading-main" data-aos="fade-right">We are One Stop Solution Providers</h2>
      </div>
      {/* Background photo */}
      <div className="photo-container" data-aos="fade-up"> {/* Add data-aos attribute */}
        {/* Photo */}
        <img src={mockTemplate} alt="Background" className="photo" />
      </div>
    </div>
  );
};

export default OneStopSolution;
