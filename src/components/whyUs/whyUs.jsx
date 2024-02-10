import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faClock, faShieldAlt, faWrench } from '@fortawesome/free-solid-svg-icons';
import './whyUs.css';

const WhyUS = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">Why DevVerse?</h1>
      <div className="two-sides-container">
        <div className="text-photo-container">
          <div className="text-side">
            <div className="row">
              <div className="column">
                <FontAwesomeIcon icon={faCogs} className="icon-top" />
                <div className="content">
                  <h2 className="heading">Quality Products</h2>
                  <p className="description">
                    We believe in Software Quality that is essential to deliver the product on time and on the required quality.
                  </p>
                </div>
              </div>
              <div className="column">
                <FontAwesomeIcon icon={faClock} className="icon-top" />
                <div className="content">
                  <h2 className="heading">Timely Work</h2>
                  <p className="description">
                    We always plan the Project Development schedule for deploying the Project on time with all completed requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <FontAwesomeIcon icon={faShieldAlt} className="icon-top" />
                <div className="content">
                  <h2 className="heading">Reliability</h2>
                  <p className="description">
                    Failure Free Products are our main target. We always develop the most reliable products without any failure issues in the future.
                  </p>
                </div>
              </div>
              <div className="column">
                <FontAwesomeIcon icon={faWrench} className="icon-top" />
                <div className="content">
                  <h2 className="heading">Maintainable</h2>
                  <p className="description">
                    Our products are fully maintainable for the injection of any new functionality or requirement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="photo-side">
            {/* Replace 'photo.jpg' with the path to your photo */}
            <img src="https://cdn.pixabay.com/photo/2019/06/06/16/02/technology-4256272_1280.jpg" alt="Company Photo" className="photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
