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
import img3 from "../../../images/Slider_3.webp";
import RecentProjects from '../../../components/RecentProjects/recentProjects';
import Breadcrumb from '../../../components/Breadcrumbs/breadcrumb';

const UPMobile = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(false);

  useEffect(() => {
    document.title = 'DevVerse | UP Mobile'
  }, []);

  const project = {
    name: "Project Description",
    description: "UP Mobile is a comprehensive mobile productivity app developed for iOS using Swift. It empowers users to stay organized and productive while on the go, offering features such as task management, event scheduling, and seamless communication with colleagues. Additionally, UP Mobile offers mobile website templates crafted with HTML to give websites a fresh and modern look on mobile devices.",
    TechStack:"iOS, Swift",
    images: [img3,img3,img3]
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

  const PrevArrow = ({ onClick }) => (
    <IconButton className="slick-arrow" onClick={onClick}>
      <i className="fas fa-chevron-left" />
    </IconButton>
  );

  const NextArrow = ({ onClick }) => (
    <IconButton className="slick-arrow" onClick={onClick}>
      <i className="fas fa-chevron-right" />
    </IconButton>
  );

  return (
    <div className="project-page-container">
       <Breadcrumb page="UPMobile"/>

      <div className="project-detail-container">
        <div className="project-carousel-container">
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div key={index} className="project-carousel-item" onClick={() => handleImageClick(image)}>
                <img src={image} alt={`Project ${index + 1}`} />
                <div className="thumb-overlay">
                  <FullscreenIcon className="full-screen-icon" style={{fontSize:"45px"}}/>
                </div>
              </div>
            ))}
          </Slider>
        </div>

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
              <Typography variant="h2">UP Mobile</Typography>
            </div>
            <div className="full-screen-carousel-container">
              <Slider {...settings} autoplay={isAutoplayEnabled}>
                {project.images.map((image, index) => (
                  <div key={index} className="full-screen-carousel-item">
                    <img className="full-screen-carousel-img" src={image} alt={`Project ${index + 1}`} />
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
      <RecentProjects />
    </div>
  );
};

export default UPMobile;
