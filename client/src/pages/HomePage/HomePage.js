import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Directory from '../../components/Directory/Directory';

export const HomePage = () => {
  return (
    <React.Fragment>
      <ImageSlider />
      <Directory />
    </React.Fragment>
  );
};

export default HomePage;