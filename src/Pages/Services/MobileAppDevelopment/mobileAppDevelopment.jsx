import React from 'react';
import "./mobileAppDevelopment.css"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import AppCategories from './categories/appCategories';

const MobileAppDevelopment = () => {
  return (
    <div className="Mobile-App-page">
   
      <div className="breadcrumb-container">
        <div className="breadcrumb-heading">
          <Typography variant="h1">Design and Development of Mobile Application</Typography>
        </div>
        <div className="breadcrumb-text">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" style={{fontSize:"15px"}}>
            <strong>Home</strong>
          </Link>
          <Typography color="textPrimary" style={{fontSize:"13px"}}>Mobile Apps Services</Typography>
        </Breadcrumbs>
        </div>

      </div>

      <div className="Mobile-App-container">
        <h2>Development of Mobile App</h2>
        <p>
        When it comes to the development of app and mobile applications services, we are leading this world in Pakistan. 
        Whether it is the android version or ios version, we are adept and deft and our designers are making fascinating and 
        incredible innovations in the mobile industry. Our android developers are making applications keeping in mind the pros and cons.
         We know what user-friendly applications are and we are merging them at a platform where mobile companies can execute their versatility 
         to produce contemporary versions of android app services in Pakistan and iPad Apps.
           
        </p>
        <h2>Delivering Stellar Services Of Development Of App</h2>
            <p>
            Do you want to leverage your business with the best and stellar development of app? Believe it or not, your business lag behind in client building if you are doing it without an app. We develop apps to help you create seamless experiences that your users will enjoy and get back to you constantly.

            Elexoft Technologies comprises of team of the developers, who create apps for mobile (android and iOS) and desktop. Our team of app developers dwell into your business agenda and strategies and come up with an app, which syrockets your business. We render a full cycle of application design, integration and management services.

            To kick off your business with mobile app development, we provide custom mobile app development services. We have experts who build cross-platform apps to help you reach your audience online through different devices. Our secure, scalable, sustainable apps work in every scenario and will help you boost your business’s profitability.

            Whether it is a consumer-centric app or an app for enterprise-class solution, our app developers steer the entire app development process. Starting from ideation, concept, delivery, and to post service of development of app, we create the best app to help you reach your customers on their devices.
            Our services are known for building solutions that meet your market demands, 
            delegate brands’s identity, and boost company’s growth and expansion.

            If you can relate to us, you have come to the right place. Hire us to reach your customers through best development of app.
            </p>
      
      </div>
        <div className="Iphone-Apps-container">
        <div className="Iphone-Apps-content">
          <div className="Iphone-Apps-Text-container">
            <h2>Iphone Apps</h2>
            <p>
            A large community is using iphone in current world.
             This is a version that is elite out of all and our developers are making it even more valuable for customers. We will surely build you application which can compete at international level to get the ball rolling for your organization.
            </p>
          </div>
          {/* Second sub-container */}
          <div className="Iphone-Apps-Image-container">
            <img src="https://esolz.net/wp-content/uploads/2021/04/CMS-Web-Development.png" alt="CMS Image" />
          </div>
          </div>
        </div>

        <div className="Android-Apps-container">
        <div className="Android-Apps-Image-container">
                <img src="https://esolz.net/wp-content/uploads/2021/04/CMS-Web-Development.png" alt="CRM Image" />
              </div>
              <div className="Android-Apps-Text-container">
                <h2>Android Apps</h2>
                <p>
                As far as producing new profitable applications are concerned,
                 we are second to none and we’re bringing much needed innovation on the table. 
                 In a very short span of time, we can produce breaking new ground sort of applications 
                 for our customers which will surely provide comfort to huge population who is currently using android version.
                  In short we are your one stop solution as far as android versions are concerned.
                      </p>
              </div>
            
             
            </div>
          
            <AppCategories/>

    </div>
  );
};

export default MobileAppDevelopment;
