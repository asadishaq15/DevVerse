import React, { useEffect } from 'react';
import "./graphicDesigning.css"
import GraphicCategories from './categories/graphicCategories';
import brochures from "../../../assets/Brochuretrifold.webp"
import LogoDesign from "../../../assets/Creative-Logo-Design-Services-in-USA.webp"
import Breadcrumb from '../../../components/Breadcrumbs/breadcrumb';

const GraphicDesign = () => {
  useEffect(() => {
    document.title = 'Best Graphic Design Services in Pakistan';
  }, []);

  return (
    <div className="graphic-deigining-main">
      <div className="Graphic-designer-page">
        <Breadcrumb page="Best Graphic Designing Services" />

        <div className="Graphic-designer-container">
          <h2>Elevate Your Brand with Our Professional Graphic Design Services</h2>
          <p>
            At DevVerse, we offer premium graphic design services tailored to meet the unique needs of businesses in Pakistan. Our team of skilled designers specializes in creating visually stunning and impactful designs that captivate your target audience. From logo design to brochures and marketing materials, we ensure that your brand stands out in a crowded marketplace.
          </p>
        </div>

        <div className="Flyer-Brochures-container">
          <div className="Flyer-Brochures-content">
            <div className="Flyer-Brochures-Text-container">
              <h2>Eye-Catching Flyers and Brochures</h2>
              <p>
                Our designers craft visually appealing flyers and brochures that effectively communicate your brand's message. With a keen eye for detail and a deep understanding of design principles, we create compelling marketing materials that capture attention and drive engagement.
              </p>
            </div>
            <div className="Flyer-Brochures-Image-container">
              <img src={brochures} alt="Flyer and Brochures" />
            </div>
          </div>
        </div>

        <div className="Logo-Design-container">
          <div className="Logo-Design-Image-container">
            <img src={LogoDesign} alt="Logo Design" />
          </div>
          <div className="Logo-Design-Text-container">
            <h2>Memorable Logo Design</h2>
            <p>
              Your logo is the face of your brand, and we understand its importance. Our expert logo designers create unique and memorable logos that accurately represent your business and leave a lasting impression on your target audience.
            </p>
          </div>
        </div>
      </div>
      <GraphicCategories />
    </div>
  );
};

export default GraphicDesign;