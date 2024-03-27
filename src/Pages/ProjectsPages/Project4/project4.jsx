import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { IconButton } from '@mui/material';
import '../projects.css';
import img4 from "../../../images/Slider_4.webp";
import RecentProjects from '../../../components/RecentProjects/recentProjects';
import Breadcrumb from '../../../components/Breadcrumbs/breadcrumb';

const OCEAM = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(false);

  const project = {
    name: "Project Description",
    description: "OCEAM is a robust web application designed to streamline operations across various business domains. Built with Java and Spring Boot, it offers scalability, security, and reliability. OCEAM's modular architecture and extensive feature set adapt to diverse business requirements, ensuring efficient workflows and seamless integration with existing systems.",
    techStack: "Java, Spring Boot",
    images: [img4]
  };

  useEffect(() => {
    document.title = 'DevVerse | OCEAM';
  }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
  };

  const handleModalClick = (e) => {
    // Prevent the click event from bubbling up to the parent container
    e.stopPropagation();
  };

  const handleToggleAutoplay = () => {
    setIsAutoplayEnabled(!isAutoplayEnabled);
  };

  return (
    <div className="project-page-container">
      {/* Breadcrumb */}
      <Breadcrumb page="OCEAM"/>

      <div className="project-detail-container">
        {/* Carousel */}
        <div className="project-carousel-container">
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div key={index} className="project-carousel-item" onClick={() => handleImageClick(image)}>
                <img src={image} alt={`Project ${index + 1}`} />
                {/* Thumb Overlay */}
                <div className="thumb-overlay">
                  <FullscreenIcon className="full-screen-icon" style={{fontSize:"45px"}}/>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Description */}
        <div className="description-container">
         
        <Typography variant="h2" className='Project-description-heading1'><h4
          style={{
            fontSize:"16px",
            lineHeight: "22px",
            marginBottom:"8px"
          }}
          >Project Description</h4></Typography>
          <Typography variant="body1" className='Project-description-text' 
          style={{
            marginTop:"8px",
            fontSize:"13px",
            lineHeight:"21px"
          }}
          >{project.description}</Typography>
      
          

          <Typography variant="h2" className='Project-description-heading1'><h4
          style={{
            fontSize:"16px",
            lineHeight: "22px",
            marginBottom:"8px"
          }}
          >Tech Stack</h4></Typography>
          <Typography variant="body1" className='Project-description-text' 
          style={{
            marginTop:"8px",
            fontSize:"13px",
            lineHeight:"21px"
          }}
          >{project.TechStack}</Typography>

        </div>

        {/* Full Screen Image Modal */}
        {isImageModalOpen && (
          <div className="full-screen-modal" onClick={handleCloseModal}>
            <div className="full-screen-carousel-header">
              <Typography variant="h2">OCEAM</Typography>
            </div>
            <div className="full-screen-carousel-container">
              <Slider {...settings} autoplay={isAutoplayEnabled}>
                {project.images.map((image, index) => (
                  <div key={index} className="full-screen-carousel-item">
                    <img className ="full-screen-carousel-img" src={image} alt={`Project ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
            <CloseIcon className="close-icon" />
            <IconButton onClick={handleToggleAutoplay} className="autoplay-button">
              <PlayCircleOutlineIcon color={isAutoplayEnabled ? "primary" : "action"} />
            </IconButton>
          </div>
        )}
      </div>
      <RecentProjects/>
    </div>
  );
};

export default OCEAM;
