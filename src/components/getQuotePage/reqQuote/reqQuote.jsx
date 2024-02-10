import React, { useState } from 'react';
import SelectCountry from 'react-select-country-list';
import './reqQuote.css'
import FlagApp from '../CountryCodeApi/flagApp';
import ContactInfoContainer from '../contactInfo/contactInfo';
const ReqQuotePage = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [flagAppData, setFlagAppData] = useState({
    selectedCountry: '',
    phoneNumber: '',
  });

  const handleFlagAppDataChange = (data) => {
    setFlagAppData(data);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  // Project Details Form
  const [projectDetails, setProjectDetails] = useState({
    projectName: '',
    customerType: '',
    projectCategory: [],
    projectTimeline: '',
    budget: '',
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
    const updatedCategories = projectDetails.projectCategory.includes(category)
      ? projectDetails.projectCategory.filter((c) => c !== category)
      : [...projectDetails.projectCategory, category];

    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      projectCategory: updatedCategories,
    }));
  };
  // Contact Information Form
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    contactMethod: '',
  });
  

  // Project Description Form
  const [projectDescription, setProjectDescription] = useState({
    description: '',
    files: [],
  });

  // Handle Project Details Form Change
  const handleProjectDetailsChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  // Handle Contact Information Form Change
  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  // Handle Project Description Form Change
  const handleProjectDescriptionChange = (e) => {
    const { name, value } = e.target;
    setProjectDescription((prevDescription) => ({ ...prevDescription, [name]: value }));
  };

  // Handle File Change for Project Description Form
  const handleFileChange = (e) => {
    const files = e.target.files;
    setProjectDescription((prevDescription) => ({
      ...prevDescription,
      files: files.length > 0 ? files : [], // Limit to 5 files in your logic
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Details:', projectDetails);
    console.log('Contact Information:', contactInfo);
    console.log('Project Description:', projectDescription);
    console.log('Flag App Data:', flagAppData);
  };

  return (
    <div className="container">
       <div className="form1">
      <h1 className="page-title">Get a Quote</h1>

      {/* Project Details Form */}
     
      <form className="quote-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Project Details</h2>
        <label>
          Project Name *
          <input type="text" name="projectName" value={projectDetails.projectName} onChange={handleProjectDetailsChange} required />
        </label>
      
        <label >
          Are you a new or existing customer? *
          <select name="customerType" value={projectDetails.customerType} onChange={handleProjectDetailsChange} required>
          <option value="" dangerouslySetInnerHTML={{ __html: '-- Are you a new or existing customer? --' }} />
          <option value="new" style={{ color: "blue" }}>New Customer</option>
          <option value="existing" style={{ color: "blue" }}>Existing Customer</option>
      </select>
        </label> {/* Closing bracket for the select element here */}
        <label>Project Category</label>
        <div className="checkbox-group">
          {projectCategories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                name="projectCategory"
                value={category}
                checked={projectDetails.projectCategory.includes(category)}
                onChange={() => handleProjectCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
        <label>
          Project Timeline *
          <select name="projectTimeline" value={projectDetails.projectTimeline} onChange={handleProjectDetailsChange} required>
            <option value="" className="cool-blue-option">Select Timeline</option>
            <option value="lessThan1Week" >Less than 1 Week</option>
            <option value="1Month">1 Month</option>
            <option value="1-3Months">1-3 Months</option>
            <option value="3-6Months">3-6 Months</option>
            <option value="MoreThan6Months">More Than 6 Months</option>
          </select>
        </label>
        {/* Select Budget */}
        <label>
          Select your budget *
          <select name="budget" value={projectDetails.budget} onChange={handleProjectDetailsChange} required>
            <option value="">Select budget in USD</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000-2000">$1000 - $2000</option>
            <option value="2000-5000">$2000 - $5000</option>
            <option value="5000-10,000">$5000 - $10,000</option>
          </select>
        </label>
         
      </form>
     
      {/* Contact Information Form */}
      <form className="quote-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Contact Information</h2>
        <label>
          Full Name *
          <input type="text" name="fullName" value={contactInfo.fullName} onChange={handleContactInfoChange} required />
        </label>
        <label>
          Email Address *
          <input type="email" name="email" value={contactInfo.email} onChange={handleContactInfoChange} required />
        </label>
     
        <label>
          Preferred contact method
          <select name="contactMethod" value={contactInfo.contactMethod} onChange={handleContactInfoChange}>
            <option value="">-- Preferred contact method --</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
        </label>
        <div className="flag-app-section">
        <FlagApp onChange={handleFlagAppDataChange} />
          </div>

      </form>

      {/* Project Description Form */}
      <form className="quote-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Project Description</h2>
          <label>
            Enter your Project Description *
            <textarea
              name="description"
              value={projectDescription.description}
              onChange={handleProjectDescriptionChange}
              required
              rows={7}
            />
          </label>
          <label>
            Additional project files (optional)
            <input type="file" name="files" onChange={handleFileChange} multiple />
            <p style={{color:"black"}}>You may attach up to 5 files under 100MB each</p>
          </label>
          {/* ... (Other form fields) */}
          <button type="submit">Send</button>
        </form>
      
      </div>
    </div>
  );
};

export default ReqQuotePage;
