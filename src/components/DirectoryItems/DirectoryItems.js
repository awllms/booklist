import React from 'react';
import Slider from 'react-slick';
import DirectoryItem from '../DirectoryItem/DirectoryItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo from '../../assets/product.jpg';

import './DirectoryItems.scss';


const DirectoryItems = ({ title }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='directory-items-container'>
      <h3>{ title }</h3>
      <div className='directory-items'>
        <Slider { ...settings }>
          <DirectoryItem photo={photo} name={'Unfu*k Yourself'} price={`$10`} />
          <DirectoryItem photo={photo} name={'Talking to Strangers'} price={`$10`} />
          <DirectoryItem photo={photo} name={'Outliers'} price={`$10`} />
          <DirectoryItem photo={photo} name={'Black Swan'} price={`$10`} />
          <DirectoryItem photo={photo} name={'Thinking Fast Slow'} price={`$10`} />
        </Slider>
      </div>
    </div>
  )
};

export default DirectoryItems;