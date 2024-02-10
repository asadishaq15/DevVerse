import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './clients.css'; // Create a corresponding CSS file for styling

const Clients = () => {
  const clientLogos = [
    // Add your client logos as image URLs
    'https://example.com/client1.png',
    'https://example.com/client2.png',
    'https://example.com/client3.png',
    'https://example.com/client4.png',
    'https://example.com/client5.png',
    'https://example.com/client6.png',
    // Add more client logos as needed
  ];

  const options = {
    items: 6, // Set the number of slides to show
    loop: true,
    margin: 20,
    dots: false, // Disable default dots
    autoplay: true,
    autoplayTimeout: 3000, // Set the autoplay interval to 3 seconds
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
    nav: true, // Enable navigation
    navText: [
      '<i class="fas fa-chevron-left"></i>', // Left arrow (Font Awesome icon)
      '<i class="fas fa-chevron-right"></i>', // Right arrow (Font Awesome icon)
    ],
  };

  return (
    <div className="clients mt-100">
      <div className="container">
        <div className="section-header">
          <h2>Our Clients</h2>
          <p>We don't just build software; we build your business.</p>
        </div>
        <div className="clients-carousel-container">
          <OwlCarousel {...options}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="client-item">
                <img src={logo} alt={`Client Logo ${index + 1}`} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Clients;
