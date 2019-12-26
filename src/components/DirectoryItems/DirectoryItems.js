import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import DirectoryItem from '../DirectoryItem/DirectoryItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './DirectoryItems.scss';


const DirectoryItems = ({ title, items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    arrows: false,
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

  const categoryURL = title.replace(/[\s]/g, '-').toLowerCase();

  return (
    <div className='directory-items-container'>
      <div className='directory-items-title'>
        <h3>{ title }</h3>
        <Link className='directory-items-title-link' to={`categories/${categoryURL}`}>View All</Link>
      </div>
      <div className='directory-items'>
        <Slider { ...settings }>
          {items
            .filter((item, index) => index < 6)
            .map((item) => (
              <DirectoryItem key={item.id} item={item} />
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default DirectoryItems;