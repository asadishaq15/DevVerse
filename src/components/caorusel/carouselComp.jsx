import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from './arrow';
import './carousel.css';
import slides from './carouselData';
import { Link } from 'react-router-dom';

function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <Arrow className={className} style={style} onClick={onClick}>
    
    </Arrow>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <Arrow className={className} style={style} onClick={onClick}>
 
    </Arrow>
  );
}

const SlideContent = ({ title1,title2, description, buttonText, rightImageSrc,isButtonVisible ,index,buttonLink,currentSlide}) => {
  const isFirstSlide = index === 0;
  return (
    <div className="contentWrap">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="content"
      >
        {index === currentSlide && <div className="overlay"></div>}
        <div className="slide-content">
          <div className="text-content">
            <motion.h1
              style={{
                color: "#007bff",
                fontFamily: "sans-serif",
                fontWeight: "500",
              }}
              className="heading-title-1"
              initial={{ translateY: "100%", opacity: 0 }}
              animate={{ translateY: "0%", opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 0.5 }}
            >
              {title1}
            </motion.h1>
            <motion.h1
              style={{
                color: isFirstSlide ? "red" : "black",
                fontFamily: "sans-serif",
                fontWeight: "500",
                marginTop: "8px"
              }}
              className="heading-title-2"
              initial={{ translateY: "100%", opacity: 0 }}
              animate={{ translateY: "0%", opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 1.0 }}
            >
              {title2}
            </motion.h1>
            <motion.p
              style={{
                color: isFirstSlide ? "white" : "black",
                fontFamily: "Arial",
                fontWeight: "300",
                marginTop: "15px"
              }}
              className="slide-description"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 1.4 }}
            >
              {description}
            </motion.p>
            {isButtonVisible && (
              <div className="button-container-wrap">
                <Link to={buttonLink}>
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: 2.0 }}
                    whileTap={{ scale: 0.8 }}
                    className={`your-read-more-button-styles`}
                  >
                    {buttonText}
                  </motion.button>
                </Link>
              </div>
            )}
          </div>
          {!isFirstSlide && (
            <motion.div
              className="image-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
            >
              <motion.img
                src={rightImageSrc}
                alt={title1}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </motion.div>
          )}
         
        </div>
      </motion.div>
    </div>
  );
};


const Carousel = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isArrowsVisible, setIsArrowsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsArrowsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsArrowsVisible(false);
  };



  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: false,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
    className="custom-carousel-wrapper"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >

    
    <Slider {...settings} ref={sliderRef}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="content-wrap2">
          <div
            className="slide-content"
            style={{
             
              display: "flex",
              background:
                index === 0
                  ? `url(${slide.rightImageSrc}) center/cover no-repeat`
                  : slide.backgroundColor,
            }}
          >
            <AnimatePresence exitBeforeEnter={false} initial={false}>
              {currentSlide === index && (
                <SlideContent
                  title1={slide.title1}
                  title2={slide.title2}
                  description={slide.description}
                  buttonText={slide.buttonText}
                  rightImageSrc={slide.rightImageSrc}
                  isButtonVisible={index !== 0}
                  isFirstSlide={index === 0} 
                  buttonLink={slide.buttonLink}
                  index={index}
                  currentSlide={currentSlide}
                />
              )}
            </AnimatePresence>
          </div>
      </div>
        </div>
      ))}
    </Slider>
  
  </div>
    
  
  );
};


export default Carousel;
