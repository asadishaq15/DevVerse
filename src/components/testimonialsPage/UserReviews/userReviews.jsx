import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './userReviews.css';
import customer1 from "../../../assets/android.png";

const testimonials = [
  {
    id: 1,
    text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
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

const settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true, // Enable center mode
  centerPadding: '0px 100px 0px 0px',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
  ]
};


const UserReviews = () => {

  return (
    <div className="user-reviews-container">
      <div className="content-container">
        <div className="content-header">
          <h2>What they've said about us</h2>
          <p>Employers 100% satisfaction ratio and tremendous respect showcase the affection of employers towards DevVerse.</p>
          <Link to="/contact">
            <button>Contact Us <span style={{ paddingLeft: '5px', fontSize: "20px" }}>&rarr;</span></button>
          </Link>
        </div>
      </div>

      <div className="testimonial-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="slide">
            <div className="testimonial-card">
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
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default UserReviews;
