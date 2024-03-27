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
import img6 from "../../../images/Slider_6.webp";
import RecentProjects from '../../../components/RecentProjects/recentProjects';
import Breadcrumb from '../../../components/Breadcrumbs/breadcrumb';

const SwipeGallery = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(false);
    useEffect(()=>{
      document.title='DevVerse | Swipe Gallery';
    },[])

  const project = {
    name: "Project Description",
    description: "Swipe Gallery is a captivating mobile application that offers an immersive experience for exploring multimedia content. Developed using React Native with Redux, it delivers a responsive and engaging user interface. Swipe Gallery allows seamless navigation through images and videos with intuitive swipe gestures, providing users with a delightful and interactive experience.",
    techStack: "React Native, Redux",
    images: [img6,img6,img6]
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
      <Breadcrumb page="Swipe Gallery"/>

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
          >{project.techStack}</Typography>

        </div>

        {/* Full Screen Image Modal */}
        {isImageModalOpen && (
          <div className="full-screen-modal">
            <div className="full-screen-carousel-header">
              <Typography variant="h2">Swipe Gallery</Typography>
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

export default SwipeGallery;
