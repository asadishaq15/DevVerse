import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './testimonials.css'; // Create a corresponding CSS file for styling

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "DevVerse stands out for its exceptional customer service and technical expertise. From the initial consultation to project completion, their team guided us every step of the way. The end result was a high-quality product that exceeded our expectations. We look forward to future collaborations.",
      author: "John Doe",
      designation: "CEO, Company A",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscCytvWC2M6bqUR5EtpzVmDbVbPrAtlA2FrNDuUHgsg&s",
    },
    {
      id: 2,
      quote: "Working with DevVerse was a game-changer for our startup. Their expertise in mobile app development exceeded our expectations. The final product was flawless and delivered on time. Thank you for your exceptional service!",
      author: "Jane Smith",
      designation: "CTO, Company B",
      image: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
    {
      id: 3,
      quote: "Choosing DevVerse for our web development needs was one of the best decisions we made. Their team understood our vision and delivered a website that perfectly reflects our brand. Their post-launch support has been outstanding. Thank you for your dedication!",
      author: "Jane Smith",
      designation: "CTO, Company B",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbq7TFORQ_IaDWe4Rf8LOtMnJ_7JpkLOipqgcqMETwTg&s",
    },
    {
      id: 4,
      quote: "DevVerse has been instrumental in transforming our business. Their innovative solutions and dedicated team helped us streamline our processes and improve efficiency. Highly recommended!",
      author: "Jane Smith",
      designation: "CTO, Company B",
      image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNV9oYXBweV9ibGFja193b21hbl9zbWlsZXNfYXRfY2FtZXJhX2lzb2xhdGVkX182Nzc5ZmU0OC1lMmJiLTQxMmYtOGE3OC1jNzQ2ZmFmNjQxM2VfMS5qcGc.jpg",
    },
    {
      id: 5,
      quote: "DevVerse is a true partner in our success journey. Their professionalism, attention to detail, and commitment to quality are unmatched. We've collaborated on multiple projects, and each time, they've exceeded our expectations. Kudos to the entire team!",
      author: "Jane Smith",
      designation: "CTO, Company B",
      image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNV9oYXBweV9ibGFja193b21hbl9hbmRfc2hvcnRfaGFpcl9zbWlsZXNfYXRfY18wMGNjMzhkOS0yY2YyLTQzZjktYTFkNy1mOTI1MmU1NzVhY2NfMS5qcGc.jpg",
    },
   
  ];

  const options = {
    items: 3, // Show two slides at a time
    loop: true,
    margin: 10, // Adjust the margin as needed
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
   
    responsive: {
      0: {
        items: 1, // Show one slide at a time on smaller screens
        margin: 90, // Adjust the margin for smaller screens
      },
      768: {
        items: 2, // Show two slides at a time on larger screens
        margin: 20, // Adjust the margin for larger screens
      },
    },
  };
  return (
    <div className="testimonials-container">
  <div className="testimonial-info">
    <div className="testimonial-heading">
      <h2>What They've Said About Us</h2>
      <p>Employers 100% satisfaction ratio and tremendous respect showcase the affection of employers towards Elexoft.</p>
    </div>
    <button>Contact Us</button>
  </div>
  <div className="testimonials-carousel-container">
    <OwlCarousel {...options}>
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial-item">
          <p>{testimonial.quote}</p>
          <div className="testimonial-author">
            <div className="author-info">
              <div className="author-image">
                <img src={testimonial.image} alt={testimonial.author} />
              </div>
              <div className="author-details">
                <h4>{testimonial.author}</h4>
                <span>{testimonial.designation}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
  </div>
</div>
  );
};

export default Testimonials;
