import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { IconButton } from '@mui/material';
import '../projects.css';
import img4 from "../../../images/Slider_4.png";

const OCEAM = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(false);

  const project = {
    name: "Project Description",
    description: "",
   ProjectDetail:"",
    images: [img4]
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
      <div className="breadcrumb-container">
        {/* Material-UI Breadcrumbs */}
        <div className="breadcrumb-heading">
          <Typography variant="h1">OCEAM</Typography>
        </div>
        <div className="breadcrumb-text">
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" style={{ fontSize: "15px" }}>
              <strong>Home</strong>
            </Link>
            <Link color="inherit" href="/portfolio" style={{ fontSize: "15px" }}>
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
          >{project.name}</h4></Typography>
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

        {/* Full Screen Image Modal */}
        {isImageModalOpen && (
          <div className="full-screen-modal">
            <div className="full-screen-carousel-header">
              <Typography variant="h2">OCEAM</Typography>
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
    </div>
  );
};

export default OCEAM;
