import React from 'react';
import Header from './components/Header/Header';
import ImageSlider from './components/ImageSlider/ImageSlider';
import './App.css';
import Directory from './components/Directory/Directory';

const App = () => {
  return (
    <div className="main-content">
      <Header />
      <ImageSlider />
      <Directory />
    </div>
  );
}

export default App;
