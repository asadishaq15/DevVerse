import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter } from 'react-router-dom';
import GraphicCategories from './Pages/Services/GraphicDesigning/categories/graphicCategories';
import GraphicDesign from './Pages/Services/GraphicDesigning/graphicDesigning';
import Clients from './components/clients/clients';
import WebDevCategories from './Pages/Services/WebDevelopment/categories/webDevCategories';
import WebDevelopmentPage from './Pages/Services/WebDevelopment/webDevlopment';
import MobileAppDevelopment from './Pages/Services/MobileAppDevelopment/mobileAppDevelopment';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


<App/>


  </React.StrictMode>
);

reportWebVitals();
