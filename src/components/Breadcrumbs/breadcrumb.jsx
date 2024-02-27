import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import './breadcrumb.css'
const BreadCrumb = ({ page }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Home
      </Link>
      <Typography color="textPrimary">{page}</Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
