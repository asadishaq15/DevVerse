import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { IconButton } from '@mui/material';
import '../projects.css';
import img1 from "../../../images/Slider_1.png";
import img2 from "../../../images/Slider_5.png";
import RecentProjects from '../../../components/RecentProjects/recentProjects';

const BARS = () => {
  
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(false);
 
  useEffect(() => {
    document.title = 'DevVerse | BARS'; 
  }, []); 
  const project = {
    name:"BARS",
    description: "",
   ProjectDetail:"",
    images: [img1, img2]
  };

  const options = {
    items: 1,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
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
      <div className="breadcrumb-container">
        {/* Material-UI Breadcrumbs */}
        <div className="breadcrumb-heading">
          <Typography variant="h1">BARS</Typography>
        </div>
        <div className="breadcrumb-text">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/" color="inherit" style={{ fontSize: "15px" }}>
              <strong>Home</strong>
            </Link>
            <Link  to="/portfolio" color="inherit"style={{ fontSize: "15px" }}>
              <strong>Portfolio</strong>
            </Link>
            <Typography color="textPrimary" style={{ fontSize: "13px" }}>Project</Typography>
          </Breadcrumbs>
        </div>
      </div>

      <div className="project-detail-container">
        {/* Carousel */}
        <div className="project-carousel-container">
          <OwlCarousel className="owl-theme" {...options}>
            {project.images.map((image, index) => (
              <div key={index} className="project-carousel-item" onClick={() => handleImageClick(image)}>
                <img src={image} alt={`Project ${index + 1}`} />
                {/* Thumb Overlay */}
                <div className="thumb-overlay">
                  <FullscreenIcon className="full-screen-icon" style={{fontSize:"45px"}}/>
                </div>
              </div>
            ))}
          </OwlCarousel>
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
          <h4 className='Project-detals-heading'>
              Project Details
          <Typography variant="body1" className='Project-description-details'>{project.ProjectDetail}</Typography>
          </h4>
        </div>

        {isImageModalOpen && (
          <div className="full-screen-modal">
            <div className="full-screen-carousel-header">
              <Typography variant="h2">{project.name}</Typography>
            </div>
            <div className="full-screen-carousel-container">
              <OwlCarousel className="owl-theme" {...options} autoplay={isAutoplayEnabled}>
                {project.images.map((image, index) => (
                  <div key={index} className="full-screen-carousel-item">
                    <img className ="full-screen-carousel-img" src={image} alt={`Project ${index + 1}`} />
                  </div>
                ))}
              </OwlCarousel>
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
