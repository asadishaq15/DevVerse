import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { IconButton } from '@mui/material';
import '../projects.css';
import img1 from "../../../images/Slider_1.webp";
import img2 from "../../../images/Slider_5.webp";
import RecentProjects from '../../../components/RecentProjects/recentProjects';
import Breadcrumb from '../../../components/Breadcrumbs/breadcrumb';

const BARS = () => {
  
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(false);
 
  useEffect(() => {
    document.title = 'DevVerse | BARS'; 
  }, []); 
  const project = {
    name:"BARS",
    description: "BARS is a versatile application designed to streamline communication within teams by providing a centralized platform for sharing ideas, files, and updates. It's built with React for the frontend and Node.js with Express for the backend, ensuring a smooth user experience. BARS integrates with MongoDB for efficient data storage, facilitating seamless collaboration among team members",
    TechStack :"React, Node.js, Express, MongoDB",
    images: [img1, img2]
  };

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

 

  const handleToggleAutoplay = () => {
    setIsAutoplayEnabled(!isAutoplayEnabled);
  };

  return (
    <div className="project-page-container">
      {/* Breadcrumb */}
      <Breadcrumb page="BARS"/>

      <div className="project-detail-container">
        {/* Carousel */}
        <div className="project-carousel-container">
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div key={index} className="project-carousel-item" onClick={(e) => { e.preventDefault(); handleImageClick(image); }}>
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

        {isImageModalOpen && (
          <div className="full-screen-modal">
            <div className="full-screen-carousel-header">
              <Typography variant="h2">{project.name}</Typography>
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
            <CloseIcon className="close-icon" onClick={handleCloseModal} />
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

export default BARS;

