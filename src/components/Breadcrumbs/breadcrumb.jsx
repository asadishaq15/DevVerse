// Breadcrumb.js
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import bgImage from '../../assets/breadbg.jpg';

const Breadcrumb = ({ page }) => {


  return (
    <div className="breadcrumb-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="breadcrumb-heading">
        <Typography variant="h1" className="breadcrumb-page" style={{
        display:"flex",
       alignContent:"center",
       justifyContent:"center"
        }}
     >{page}</Typography>
      </div>
      <div className="breadcrumb-text">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" className="breadcrumb-link" style={{

            fontSize:"18px"
            }}>
            Home
          </Link>
          <Typography color="textPrimary" className="breadcrumb-page" style={{

            fontSize:"18px"
          }}>{page}</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Breadcrumb;
