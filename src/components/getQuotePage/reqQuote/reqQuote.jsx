import React, { useState } from 'react';
import './reqQuote.css';
import FlagApp from '../CountryCodeApi/flagApp';
import axios from 'axios';

const ReqQuotePage = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [flagAppData, setFlagAppData] = useState({
    selectedCountry: '',
    phoneNumber: '',
  });

  const handleFlagAppDataChange = (data) => {
    setFlagAppData(data);
  };


  const [formData, setFormData] = useState({
    projectName: '',
    customerType: '',
    projectCategory: [],
    projectTimeline: '',
    budget: '',
    fullName: '',
    email: '',
    contactMethod: '',
    description: '',
    files: [],
  });

  const projectCategories = [
    'Website Design',
    'Website Development',
    'iOS App Development',
    'Android App Development',
    'Hybrid Mobile App',
    'Digital Marketing',
    'Social Media Marketing',
    'Search Engine Optimization (SEO)',
    'POS System',
    'Software Development',
    'Ecommerce Website',
    'CRM Development',
    'Consultation',
  ];

  const handleProjectCategoryChange = (category) => {
    const updatedCategories = formData.projectCategory.includes(category)
      ? formData.projectCategory.filter((c) => c !== category)
      : [...formData.projectCategory, category];

    setFormData((prevData) => ({
      ...prevData,
      projectCategory: updatedCategories,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFormData({
      ...formData,
      files: files.length > 0 ? files : [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);

    try {
      const response = await axios.post('http://localhost:3001/submit-quote', formData);

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
      alert('Error submitting quote form.');
    }
  };

  return (
    <div className="container">
      <div className="form1">
        <h1 className="page-title">Get a Quote</h1>

        <form className="quote-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Project Details</h2>
          <label>
            Project Name *
            <input type="text" name="projectName" value={formData.projectName} onChange={handleInputChange} required />
          </label>

          <label>
            Are you a new or existing customer? *
            <select name="customerType" value={formData.customerType} onChange={handleInputChange} required>
              <option value="" dangerouslySetInnerHTML={{ __html: '-- Are you a new or existing customer? --' }} />
              <option value="new" style={{ color: 'blue' }}>New Customer</option>
              <option value="existing" style={{ color: 'blue' }}>Existing Customer</option>
            </select>
          </label>

          <label>Project Category</label>
          <div className="checkbox-group">
            {projectCategories.map((category) => (
              <label key={category}>
                <input
                  type="checkbox"
                  name="projectCategory"
                  value={category}
                  checked={formData.projectCategory.includes(category)}
                  onChange={() => handleProjectCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>

          <label>
            Project Timeline *
            <select name="projectTimeline" value={formData.projectTimeline} onChange={handleInputChange} required>
              <option value="" className="cool-blue-option">Select Timeline</option>
              <option value="lessThan1Week" >Less than 1 Week</option>
              <option value="1Month">1 Month</option>
              <option value="1-3Months">1-3 Months</option>
              <option value="3-6Months">3-6 Months</option>
              <option value="MoreThan6Months">More Than 6 Months</option>
            </select>
          </label>

          <label>
            Select your budget *
            <select name="budget" value={formData.budget} onChange={handleInputChange} required>
              <option value="">Select budget in USD</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000-2000">$1000 - $2000</option>
              <option value="2000-5000">$2000 - $5000</option>
              <option value="5000-10,000">$5000 - $10,000</option>
            </select>
          </label>

          <h2 className="form-title">Contact Information</h2>
          <label>
            Full Name *
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </label>

          <label>
            Email Address *
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </label>

          <label>
            Preferred contact method
            <select name="contactMethod" value={formData.contactMethod} onChange={handleInputChange}>
              <option value="">-- Preferred contact method --</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
          </label>

          <div className="flag-app-section">
            <FlagApp onChange={handleFlagAppDataChange} />
          </div>

          <h2 className="form-title">Project Description</h2>
          <label>
            Enter your Project Description *
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={7}
            />
          </label>

          <label>
            Additional project files (optional)
            <input type="file" name="files" onChange={handleFileChange} multiple />
            <p style={{ color: 'black' }}>You may attach up to 5 files under 100MB each</p>
          </label>

          <button className="submit-button" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ReqQuotePage;
