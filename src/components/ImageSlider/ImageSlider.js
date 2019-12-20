import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ImageSlider.scss';

const ImageSlider = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <section className='slider'>
      <Slider {...settings } >
        <div className='image-placeholder'></div>
        <div className='image-placeholder'></div>
        <div className='image-placeholder'></div>
      </Slider>
    </section>
  );
};

export default ImageSlider;