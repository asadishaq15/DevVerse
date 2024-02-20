import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import '../projects.css';
import img1 from "../../../images/Slider_1.png";
import CloseIcon from '@mui/icons-material/Close';
import RecentProjects from '../../../components/RecentProjects/recentProjects';

const ProjectDetail = () => {
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const project = {
    name: "Project Name",
    description: "Project Description",
    images: [img1, img1, img1]
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

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setImageModalOpen(true);
  };

  const handleCloseModal = () => {
    setImageModalOpen(false);
  };

  const handleModalClick = (e) => {
    // Close modal if clicked outside the image
    if (e.target.classList.contains('full-screen-modal')) {
      setImageModalOpen(false);
    }
  };

  return (
    <div className="project-page-container">
      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="breadcrumb-heading">
          <Typography variant="h1">Best Web Design and Development Services</Typography>
        </div>
        <div className="breadcrumb-text">
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" style={{fontSize:"15px"}}>
              <strong>Home</strong>
            </Link>
            <Link color="inherit" href="/" style={{fontSize:"15px"}}>
              <strong>Porfolio</strong>
            </Link>
            <Typography color="textPrimary" style={{fontSize:"13px"}}>Web Development Services</Typography>
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
              </div>
            ))}
          </OwlCarousel>
        </div>
        
        {/* Description */}
        <div className="description-container">
          <Typography variant="h2">{project.name}</Typography>
          <Typography variant="body1">{project.description}</Typography>
        </div>

        {/* Full Screen Image Modal */}
        {isImageModalOpen && (
          <div className="full-screen-modal" onClick={handleModalClick}>
            <img src={selectedImage} alt="Full Screen" className="full-screen-image" />
            <CloseIcon className="close-icon" onClick={handleCloseModal} />
          </div>
        )}
  
      </div>
      <RecentProjects/>
    </div>
  );
};

export default ProjectDetail;
