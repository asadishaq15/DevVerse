import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './askProject.css';
import { Link } from 'react-router-dom';

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
        <Link to="/request-quote"> 
        <button className="wide-card-button">Get A Free Quote</button>
        </Link>
      </div>
    </div>
  );
};

export default AskProject;
