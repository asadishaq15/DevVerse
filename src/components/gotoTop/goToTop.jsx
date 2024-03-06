import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    let heightToVisible = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToVisible) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <IconButton
          onClick={goToTop}
          sx={{
            position: 'fixed',
            bottom: '105px',
            right: '15px',
            zIndex: '999',
            height:'36px',
            width:'36px',
            lineHeight:'36px',
            borderRadius:'0px',
            backgroundColor: '#444',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#2980b9',
            },
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </>
  );
};

export default GoToTop;
