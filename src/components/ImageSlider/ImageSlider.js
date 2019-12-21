import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sliderImage from '../../assets/slider.jpg';
// import photoTwo from '../../assets/photo2.jpg';
// import photoThree from '../../assets/photo3.jpg';
import './ImageSlider.scss';

const ImageSlider = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <section className='slider'>
      <Slider {...settings } >
        <div className='image-placeholder'>
          <img className='slider-image' src={sliderImage} alt='Books' />
        </div>
        <div className='image-placeholder'>
          <img className='slider-image' src={sliderImage} alt='Books' />
        </div>
        <div className='image-placeholder'>
          <img className='slider-image' src={sliderImage} alt='Books' />
        </div>
      </Slider>
    </section>
  );
};

export default ImageSlider;