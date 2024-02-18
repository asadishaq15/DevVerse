import React from 'react';
import "./graphicDesigning.css"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const GraphicDesign = () => {
  return (
    <div className="Graphic-designer-page">
   
      <div className="breadcrumb-container">
        {/* Material-UI Breadcrumbs */}
        <div className="breadcrumb-heading">
          <Typography variant="h1">Best Graphic Designing Services</Typography>
        </div>
        <div className="breadcrumb-text">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" style={{fontSize:"15px"}}>
            <strong>Home</strong>
          </Link>
          <Typography color="textPrimary" style={{fontSize:"13px"}}>Graphic Designing Services</Typography>
        </Breadcrumbs>
        </div>

      </div>

      <div className="Graphic-designer-container">
        <h2>Our Design For Your Business Achievement</h2>
        <p>
        We at Elexoft, provide premium sort of graphic design services all over Pakistan. Our graphic designers are not only expert in graphic designing but also they’re up-to-date as far as web promotion is concerned. 
        So here you can get multiple benefits under a table which is our specialty. Elexoft is known for producing best logo design in Pakistan.
        </p>
        
        <h2>One Stop Shop To Avail Of Full Graphic Designing Services</h2>
        <p>
        Are you worried about making your online presence in saturated market? It’s hard for businesses to create an online space in an existing marketing. But, why worry? We have ways out for all your problems.
        Elexoft Technologies provides complete graphic designing services in Pakistan, which bedrocks on solving visual branding problems for small,
        medium and large companies. We believe in setting our passions into practice to make modern websites and creating online visuals for digital marketing compaigns with incorporation of best online marketing tactics.

        We understand the purpose of incorporating graphic designing services into digital marketing is communicate with your target audience.
        Digital marketing is all about how you attract audience’s attention. Do you know how? The art of a creative graphic designer expresses in the promotion of products or services because that’s how you build an online brand awareness. 
        Always remember, the success of your brand in present era depends upon how you manage and build an online presence.

        To help you expand your brand reach and build an online presence, we hire the best resources of graphic designers in Pakistan. Our customers’ trust and satisfaction is our top concern. Therefore, we provide top-notch,
        competitive, and most relatable graphic designing services to our customers that meet their business requirements.
        </p>
      </div>
        <div className="Flyer-Brochures-container">
        <div className="Flyer-Brochures-content">
          <div className="Flyer-Brochures-Text-container">
            <h2>Flyer and Brochures</h2>
            <p>
            Distinctive kinds of flyer designs are missing in Pakistan and we are here to bring much needed style and class in brochures which will surely attract customers at will. 
            If you’re looking for some of the eye- catching flyers and brochures, let Elexoft know and leave the rest to you as we’ve got all covered for your convenience. Not only we will provide you contemporary and ingenious flyers,
            but we will come up with such a marketing plan that will turn the table around as far as branding and advertising is concerned. Through our best logo designers and graphic designers,
            we’ll produce your message in such a crafty way that it will appear to be so pleasing on the eye and at the same moment so appealing as well
            </p>
          </div>
          {/* Second sub-container */}
          <div className="Flyer-Brochures-Image-container">
            <img src="https://esolz.net/wp-content/uploads/2021/04/CMS-Web-Development.png" alt="CMS Image" />
          </div>
          </div>
        </div>

        <div className="Logo-Design-container">
        <div className="Logo-Design-Image-container">
                <img src="https://esolz.net/wp-content/uploads/2021/04/CMS-Web-Development.png" alt="CRM Image" />
              </div>
              <div className="Logo-Design-Text-container">
                <h2>Logo Design</h2>
                <p>
                 Elexoft is a hub of best logo designs as we have got all what is required to make marked and note- worthy logos. We will make your business a big thing by producing palpable logo which will make your identity all over Pakistan.
                 There are so many hurdles which people often face in logo design that logos are usually not effectively communicative due to which organizations faces so many issues but our foremost task is to produce such types of logo which can stick to anyone’s mind and by just imagining about the logo, customer can think of whole organization and logo will be symbol of elegance.                </p>
              </div>
            
             
            </div>
         

    </div>
  );
};

export default GraphicDesign;
