// RecentProjects.js

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  const sliderRef = useRef(null);

   const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    swipe:true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  const handleSwipeStart = (event) => {
    // Prevent the default action of the swipe event
    event.preventDefault();
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
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
      <Slider {...settings} ref={sliderRef} onTouchStart={handleSwipeStart}>
        {recentProjects.map((project, index) => (
          <Link key={index} to={project.link} className="recent-project-item">
            <img src={project.imageUrl} alt={`Project ${index + 1}`} />
            <div className="project-details">
              <h5>{project.name}</h5>
              <p>{project.techStack}</p>
            </div>
          </Link>
        ))}
 </Slider>

      </div>
    </div>
  </div>
  );
};

export default RecentProjects;
