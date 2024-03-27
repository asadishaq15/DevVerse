import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './deliveredProject.css'; // Ensure to import your CSS file for styling
import s1 from "../../../assets/s1h.webp"
import s2 from "../../../assets/s2h.webp"
import s3 from "../../../assets/s3h.webp"
import s4 from "../../../assets/s4h.webp"
import s5 from "../../../assets/s5h.webp"
import s6 from "../../../assets/s6h.webp"
import s7 from "../../../assets/s7h.webp"

const DeliveredProjects = ({ photos }) => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    margin: 15, 
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      }
    ]
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
        <Slider {...options}>
        {DeliveredProjects.map((DeliveredProject) => (
          <div key={DeliveredProject.id} className="carousel-item">
            <img src={DeliveredProject.image} alt={`Slide ${DeliveredProject.id}`} />
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveredProjects;
