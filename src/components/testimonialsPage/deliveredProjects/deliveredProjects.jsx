import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './deliveredProject.css'; // Ensure to import your CSS file for styling

const DeilveredProjects = ({ photos }) => {
  const DeliveredProjects = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscCytvWC2M6bqUR5EtpzVmDbVbPrAtlA2FrNDuUHgsg&s",
    },
    {
      id: 2,
      image: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbq7TFORQ_IaDWe4Rf8LOtMnJ_7JpkLOipqgcqMETwTg&s",
    },
    {
      id: 4,
      image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNV9oYXBweV9ibGFja193b21hbl9zbWlsZXNfYXRfY2FtZXJhX2lzb2xhdGVkX182Nzc5ZmU0OC1lMmJiLTQxMmYtOGE3OC1jNzQ2ZmFmNjQxM2VfMS5qcGc.jpg",
    },
    {
      id: 5,
      image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNV9oYXBweV9ibGFja193b21hbl9hbmRfc2hvcnRfaGFpcl9zbWlsZXNfYXRfY18wMGNjMzhkOS0yY2YyLTQzZjktYTFkNy1mOTI1MmU1NzVhY2NfMS5qcGc.jpg",
    },
  ];

  const options = {
    items: 4, // Set the number of slides to show
    loop: true,
    margin: 20,
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
