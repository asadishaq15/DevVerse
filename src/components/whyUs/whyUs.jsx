import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faClock, faShieldAlt, faWrench } from '@fortawesome/free-solid-svg-icons';
import './whyUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUS = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="main-container" data-aos="fade-up">
      
     <div className='main-heading' data-aos="fade-up"><h3>Why choose <strong>DevVerse?</strong></h3></div> 
      <div className="two-sides-container">
        <div className="text-photo-container">
          <div className="text-side">
            <div className="row">
              <div className="column" data-aos="fade-down">
                <div className="icon-container">
                  <div className="icon-top">
                    <FontAwesomeIcon icon={faCogs} />
                  </div>
                </div>
                <div className="content">
                  <div className="heading-column">
                    <h2>Quality Products</h2>
                  </div>
                  <div className="description">
                    <p>
                      We believe in Software Quality that is essential to deliver the product on time and on the required quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="column" data-aos="fade-down">
                <div className="icon-container">
                  <div className="icon-top">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                </div>
                <div className="content">
                  <div className="heading-column">
                    <h2>Timely Work</h2>
                  </div>
                  <div className="description">
                    <p>
                      We always plan the Project Development schedule for deploying the Project on time with all completed requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column" data-aos="fade-down">
                <div className="icon-container">
                  <div className="icon-top">
                    <FontAwesomeIcon icon={faShieldAlt} />
                  </div>
                </div>
                <div className="content">
                  <div className="heading-column">
                    <h2>Reliability</h2>
                  </div>
                  <div className="description">
                    <p>
                      Failure Free Products are our main target. We always develop the most reliable products without any failure issues in the future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="column" data-aos="fade-down">
                <div className="icon-container">
                  <div className="icon-top">
                    <FontAwesomeIcon icon={faWrench} />
                  </div>
                </div>
                <div className="content">
                  <div className="heading-column">
                    <h2>Maintainable</h2>
                  </div>
                  <div className="description">
                    <p>
                      Our products are fully maintainable for the injection of any new functionality or requirement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="photo-side" data-aos="fade-left">
            <img src="https://cdn.pixabay.com/photo/2019/06/06/16/02/technology-4256272_1280.jpg" alt="Company Photo" className="photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
