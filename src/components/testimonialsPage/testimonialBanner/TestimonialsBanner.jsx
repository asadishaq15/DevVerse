import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './TestimonialsBanner.css'; // Import the CSS file for styling
import Clients from '../../clients/clients';

const TestimonialsBanner = () => {
  return (
    <section className="testimonials-banner">
      <div className="banner-content">
        {/* Use motion.div for animations */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.9 }} 
          className="banner-heading" 
        >
          Testimonials
        </motion.h2>
        {/* Use motion.p for animations */}
        <motion.p
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.5 }} 
          className="banner-paragraph"
        >
          Our clients are so much satisfied by working with us. The 100% satisfaction ratio and tremendous respect showcase the affection of clients towards the company. Each client is like a star in the constellation, without it the beauty is incomplete.
        </motion.p>
      </div>
      <div className="clients-container">
        <Clients />
      </div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </section>
  );
};

export default TestimonialsBanner;
