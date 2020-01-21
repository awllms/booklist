import React from 'react';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom';

import DirectoryItem from '../DirectoryItem/DirectoryItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DirectoryItems.scss';


const DirectoryItems = ({ title, items, history, match }) => {
  
  const settings = {
    dots: true,
    infinite: items.length > 3 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 940,
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

  const categoryURL = encodeURIComponent(title.replace(/[\s]/g, '-').toLowerCase());

  return (
    <div className='directory-items-container'>
      <div className='directory-items-title'>
        <h3 onClick={() => history.push(`/categories/${categoryURL}`)}>
          { title }
        </h3>
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

export default withRouter(DirectoryItems);