import React, { useEffect, useState } from 'react';
import './contact.css';
import ContactInfoContainer from '../getQuotePage/contactInfo/contactInfo';
import axios from 'axios';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | Software House | DevVerse';
  }, []);

  const [formData, setFormData]= useState({

    name:'',
    phone:'',
    email:'',
    message :'',
  });

  const handleInputChange =(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting contact form:', formData);

    try {
      const response = await axios.post('http://localhost:3001/contact-form', formData);

      console.log('Response status:', response.status);

      const data = response.data;

      if (data.status === 422 || !data) {
        window.alert('Form submission unsuccessful');
        console.log('Invalid form submission');
      } else {
        alert('Form submitted successfully');
        console.log('Successful submission');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting contact form.');
    }
  };


  return (
    <section id="contact" className="contact">
    <h1 className="contact-heading">Get in Touch <strong>With Us</strong></h1>
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.7590106953745!2d73.04788291424057!3d33.68442008071063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df98fc69c2c73d%3A0x5d01e26769097e47!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sin!4v1644684739958!5m2!1sen!2sin"
        width="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
      ></iframe>
    </div>
    <div className="contact-in">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} className="contact-form-txt" required />
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            required
            placeholder="Contact number"
            maxLength="10"
            value={formData.phone}
            onChange={handleInputChange}
            className="contact-form-phone"
          />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="contact-form-email" required />
          <textarea placeholder="Your Message" name="message" rows="10" value={formData.message} onChange={handleInputChange} className="contact-form-txtarea" required></textarea>
          <button type="submit" className="contact-form-btn">Submit</button>
        </form>
      </div>
      <div className="contact-info-container">
        <ContactInfoContainer />
      </div>
    </div>
  </section>
  );
};

export default Contact;
