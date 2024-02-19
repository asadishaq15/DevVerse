import React, { useEffect } from 'react';
import './latestWork.css'; // Importing the CSS file
import { FaSearch, FaLink } from 'react-icons/fa'; // Importing icons from react-icons library
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS file
import P1 from "../../images/Slider_1.png";
import P2 from "../../images/Slider_2.png";
import P3 from "../../images/Slider_3.png";
import P4 from "../../images/Slider_4.png";
import P5 from "../../images/Slider_5.png";
import P6 from "../../images/Slider_6.png";
import P7 from "../../images/Slider_7.png"

const LatestWorkComponent = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  const projects = [
    { 
      name: "Project 1", 
      imageUrl: P1,
      link: 'https://lh3.googleusercontent.com/proxy/6B65hEWdfKW7b00bqoAERB7mfO9La_XVxiwmLWKrxWzJMR7AdOyKufkJUK6Gggx_mxDFSEbURe6CotFT84I9fmtaf3Y5JNhnDwLQpmJvtcGvHmAIbrx79jCQXPGMCyqX1_kvrqFPLSlhBQ' 
    },
    { 
        name: "Smart Code", 
        imageUrl: P2,
        link: 'https://lh3.googleusercontent.com/proxy/6B65hEWdfKW7b00bqoAERB7mfO9La_XVxiwmLWKrxWzJMR7AdOyKufkJUK6Gggx_mxDFSEbURe6CotFT84I9fmtaf3Y5JNhnDwLQpmJvtcGvHmAIbrx79jCQXPGMCyqX1_kvrqFPLSlhBQ' 
      },
      { 
        name: "UP Mobile", 
        imageUrl: P3,
        link: 'https://lh3.googleusercontent.com/proxy/6B65hEWdfKW7b00bqoAERB7mfO9La_XVxiwmLWKrxWzJMR7AdOyKufkJUK6Gggx_mxDFSEbURe6CotFT84I9fmtaf3Y5JNhnDwLQpmJvtcGvHmAIbrx79jCQXPGMCyqX1_kvrqFPLSlhBQ' 
      },
      { 
        name: "OCEAM", 
        imageUrl: P4,
        link: 'https://lh3.googleusercontent.com/proxy/6B65hEWdfKW7b00bqoAERB7mfO9La_XVxiwmLWKrxWzJMR7AdOyKufkJUK6Gggx_mxDFSEbURe6CotFT84I9fmtaf3Y5JNhnDwLQpmJvtcGvHmAIbrx79jCQXPGMCyqX1_kvrqFPLSlhBQ' 
      },
      { 
        name: "BARS", 
        imageUrl: P5,
        link: 'https://lh3.googleusercontent.com/proxy/6B65hEWdfKW7b00bqoAERB7mfO9La_XVxiwmLWKrxWzJMR7AdOyKufkJUK6Gggx_mxDFSEbURe6CotFT84I9fmtaf3Y5JNhnDwLQpmJvtcGvHmAIbrx79jCQXPGMCyqX1_kvrqFPLSlhBQ' 
      },
      { 
        name: "Swipe Gallery", 
        imageUrl: P6,
        link: 'https://lh3.googleusercontent.com/proxy/6B65hEWdfKW7b00bqoAERB7mfO9La_XVxiwmLWKrxWzJMR7AdOyKufkJUK6Gggx_mxDFSEbURe6CotFT84I9fmtaf3Y5JNhnDwLQpmJvtcGvHmAIbrx79jCQXPGMCyqX1_kvrqFPLSlhBQ' 
      },
      { 
        name: "The Drawers", 
        imageUrl: P7,
        link: 'https://lh3.googleusercontent.com/proxy/6B65hEWdfKW7b00bqoAERB7mfO9La_XVxiwmLWKrxWzJMR7AdOyKufkJUK6Gggx_mxDFSEbURe6CotFT84I9fmtaf3Y5JNhnDwLQpmJvtcGvHmAIbrx79jCQXPGMCyqX1_kvrqFPLSlhBQ' 
      },
    ];

  return (
    <div className="latest-work-container">
        <div className="container-heading">
      <h2>This is our Latest <strong>Work</strong></h2>
      <p>You can review some of the projects that were successfully implemented by DevVerse.</p>
      </div>
      <div className="project-container">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" data-aos="zoom-in"> {/* Link to the project */}
            <div className="project-image-container">
              <img src={project.imageUrl} alt={project.name} className="project-image" />
            </div>
            <div className="project-info">
              <div className="project-buttons" style={{marginTop:"auto"}}>
                <button onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }} className="Link-button"
                style={{ 
                    fontSize: '15px', 
                    fontWeight: 'bold', 
                    color: '#007bff' 
                    }}
                
                > 
                  <FaSearch />
                </button>
                <button onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }} className="Link-button"
                   style={{ 
                    fontSize: '15px', 
                    fontWeight: 'bold', 
                    color: '#007bff' 
                    }}
                > 
                  <FaLink />
                </button>
              </div>
              <h3 style={{
                    marginTop:"auto",
                    fontSize:"22px",
                    fontFamily:"sans-serif"
              }}>
                {project.name}
                
                </h3>
            </div>
          </a>
        ))}
      </div>
      <button className="end-button">VIEW PORTFOLIO</button>
    </div>
  );
};

export default LatestWorkComponent;
