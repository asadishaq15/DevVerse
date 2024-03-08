// UserReviews.jsx

import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './userReviews.css';
import customer1 from "../../../assets/android.png"

const testimonials = [
  {
    id: 1,
    text:  "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    name: "Name 1",
    designation: "Designation 1",
    image: customer1,
  },
  {
    id: 2,
    text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
    name: "Name 1",
    designation: "Designation 1",
    image: customer1,
  },
  {
    id: 3,
    text: "To apply quotation marks around the text string in your JavaScript object directly within the JSX code, you can use template literals and include the quotation marks within the string. Here's ho",
    name: "Name 1",
    designation: "Designation 1",
    image: customer1,
  },
];

const UserReviews = () => {
  const options = {
    items: 2,
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        center:true
      },
      600: {
        items: 2,
        // Center the active item on medium screens
      },
      1000: {
        items: 2,
        
            },

      1200:{
        items: 2,
        
          },

      992:{
        items:1,
              
      }
    },
  };

  return (
    <div className="user-reviews-container">
      <div className="content-container">
        <div className="content-header">
          <h2>What they've said about us</h2>
          <p>Employers 100% satisfaction ratio and tremendous respect showcase the affection of employers towards Elexoft.</p>
          <button>Contact Us</button>
        </div>
      </div>

      <div className="testimonial-container">
        <OwlCarousel {...options}>
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="backQuote">
                <p>{`"${testimonial.text}"`}</p>
              </div>
              <div className="testimonial-profile">
                <div className="testimonial-img">
                  <img src={testimonial.image} alt="Testimonial image" />
                </div>
                <div className="testimonial-details">
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.designation}</h4>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default UserReviews;
