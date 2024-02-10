import React from 'react';
import './getQuotePage.css'
import ReqQuotePage from './reqQuote/reqQuote';
import ContactInfoContainer from './contactInfo/contactInfo';

const GetQuotePage = () => {
  return (
    <div className="request-quote-container">
      <div className="form-container">
      <ReqQuotePage/>
      </div>
      <div className="contact-info-container">
    <ContactInfoContainer/>
      </div>
    </div>
  );
};

export default GetQuotePage;
