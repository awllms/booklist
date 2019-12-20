import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import photoOne from '../../assets/photo1.jpg';
import photoTwo from '../../assets/photo2.jpg';
import photoThree from '../../assets/photo3.jpg';
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
        <div className='image-placeholder'>
          <img src={photoOne} alt='Books' />
        </div>
        <div className='image-placeholder'>
          <img src={photoTwo} alt='Books' />
        </div>
        <div className='image-placeholder'>
          <img src={photoThree} alt='Books' />
        </div>
      </Slider>
    </section>
  );
};

export default ImageSlider;