import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter } from 'react-router-dom';
import TestimonialsPage from './components/testimonialsPage/testimonials/testimonials';
import DeilveredProjects from './components/testimonialsPage/deliveredProjects/deliveredProjects';
import TestimonialsBanner from './components/testimonialsPage/testimonialBanner/TestimonialsBanner';
import LatestWorkComponent from './components/ProjectPortfolio/latestWork';
import ProjectDetail from './Pages/ProjectsPages/Project1/project1';
import Project2 from './Pages/ProjectsPages/Project2/project2';
import Project3 from './Pages/ProjectsPages/Project3/project3';
import Project4 from './Pages/ProjectsPages/Project4/project4';
import Project5 from './Pages/ProjectsPages/Project5/project5';
import Project6 from './Pages/ProjectsPages/Project6/project6';
import Project7 from './Pages/ProjectsPages/Project7/project7';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


<App/>


  </React.StrictMode>
);

reportWebVitals();
