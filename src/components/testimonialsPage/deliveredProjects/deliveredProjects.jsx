import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './deliveredProject.css'; // Ensure to import your CSS file for styling
import s1 from "../../../assets/s1h.png"
import s2 from "../../../assets/s2h.png"
import s3 from "../../../assets/s3h.png"
import s4 from "../../../assets/s4h.png"
import s5 from "../../../assets/s5h.png"
import s6 from "../../../assets/s6h.png"
import s7 from "../../../assets/s7h.png"

const DeilveredProjects = ({ photos }) => {
  const DeliveredProjects = [
    {
      id: 1,
      image: s1,
    },
    {
      id: 2,
      image: s2,
    },
    {
      id: 3,
      image: s3
    },
    {
      id: 4,
      image: s4
    },
    {
      id: 5,
      image: s5
    },
    {
      id: 6,
      image: s6
    },
    {
      id: 7,
      image: s7
    },
  ];

  const options = {
    items: 4,
    loop: true,
    margin: 15,
    dots: false, // Disable default dots
    autoplay: true,
    autoplayTimeout: 3000, // Set the autoplay interval to 3 seconds
    responsive: {
      0: {
        items: 2,
        center: true, // Center the active item on smaller screens
      },
      600: {
        items: 2,
        center: true, // Center the active item on medium screens
      },
      1000: {
        items: 4,
        center: true, // Center the active item on larger screens
      },
    },
  };

  return (
    <div className="DeliveredProjects-container">
      <div className="DeliveredProjects-info">
      <div className="DeliveredProjects-heading">
        <h2 style={{color:"#3265b7"}}>What We Delivered</h2>
        <p className="heading-paragraph">DevVerse is committed to providing reliable, high-standard mobile apps and software solutions to our clients. We are offering multiple services in Website Development, Graphic Designing, Digital Marketing, and Mobile Apps Development. We make CMS, CRM, and provide ERP solutions</p>
      </div>
      </div>
      <div className="DeliveredProjects-carousel-container">
        <OwlCarousel {...options}>
        {DeliveredProjects.map((DeliveredProjects) => (
          <div key={DeliveredProjects.id} className="carousel-item">
            <img src={DeliveredProjects.image} alt={`Slide ${DeliveredProjects.id}`} />
          </div>
        ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default DeilveredProjects;
