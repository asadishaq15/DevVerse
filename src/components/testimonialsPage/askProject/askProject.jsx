import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './askProject.css';

const AskProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="wide-card">
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      <div className="innerContainer" data-aos="flip-up">
        <h2 className="wide-card-heading">Have a project in mind?</h2>
        <button className="wide-card-button">Get A Free Quote</button>
      </div>
    </div>
  );
};

export default AskProject;
