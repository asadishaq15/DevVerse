// RecentProjects.js

import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './recentProjects.css';
import P1 from "../../images/Slider_1.png";
import P2 from "../../images/Slider_2.png";
import P3 from "../../images/Slider_3.png";
import P4 from "../../images/Slider_4.png";
import P5 from "../../images/Slider_5.png";
import P6 from "../../images/Slider_6.png";
import P7 from "../../images/Slider_7.png";
import { Link } from 'react-router-dom';

const RecentProjects = () => {
  const recentProjects = [
    { 
        name: "BARS", 
        imageUrl: P1,
        link: '/project/115/bars-application',
        techStack: "React, Node.js, Express, MongoDB"
      },
      { 
        name: "Smart Code", 
        imageUrl: P2,
        link: '/project/116/smart-code-application',
        techStack: "Angular, Firebase"
      },
      { 
        name: "UP Mobile", 
        imageUrl: P3,
        link: '/project/117/up-mobile-application',
        techStack: "iOS, Swift"
      },
      { 
        name: "OCEAM", 
        imageUrl: P4,
        link: '/project/118/oceam-application',
        techStack: "Java, Spring Boot"
      },
    
      { 
        name: "Swipe Gallery", 
        imageUrl: P6,
        link: '/project/119/swipe-gallery',
        techStack: "React Native, Redux"
      },
      { 
        name: "The Drawers", 
        imageUrl: P7,
        link: '/project/121/the-drawers',
        techStack: "Python, Django, MySQL"
      },
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
    <div className="recent-projects">
    <div className="container">
      <div className="section-header-1">
        <h4>Recent Projects</h4>
        <div className="recentProjects-owl-nav" >
          <button className="recent-projects-owl-prev" onClick={handlePrevClick}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="recent-projects-owl-next" onClick={handleNextClick}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="recent-projects-carousel-container">
      <OwlCarousel {...options} ref={owlRef}>
        {recentProjects.map((project, index) => (
          <Link key={index} to={project.link} className="recent-project-item">
            <img src={project.imageUrl} alt={`Project ${index + 1}`} />
            <div className="project-details">
              <h5>{project.name}</h5>
              <p>{project.techStack}</p>
            </div>
          </Link>
        ))}
      </OwlCarousel>

      </div>
    </div>
  </div>
  );
};

export default RecentProjects;
