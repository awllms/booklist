import React from 'react';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CustomButton from '../CustomButton/CustomButton';
import sliderImageOne from '../../assets/dash-of-color.jpg';
import sliderImageTwo from '../../assets/quality-time.jpg';
import sliderImageThree from '../../assets/morning-refresher.jpg';

import './ImageSlider.scss';

const ImageSlider = ({ history }) => {
  
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
        <div className='image-placeholder'
          onClick={() => history.push(`/categories/new-releases`)}>
          <img className='slider-image' src={sliderImageOne} alt='Books' />
          <CustomButton>Shop New Releases</CustomButton>
        </div>
        <div className='image-placeholder'
          onClick={() => history.push(`/categories/best-sellers`)}>
          <img className='slider-image' src={sliderImageTwo} alt='Books' />
          <CustomButton>Shop Best Sellers</CustomButton>
        </div>
        <div className='image-placeholder'
          onClick={() => history.push(`/categories/personal-development`)}>
          <img className='slider-image' src={sliderImageThree} alt='Books' />
          <CustomButton>Shop Self-Help</CustomButton>
        </div>
      </Slider>
    </section>
  );
};

export default withRouter(ImageSlider);