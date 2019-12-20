import React from 'react';
import Header from './components/Header/Header';
import ImageSlider from './components/ImageSlider/ImageSlider';
import './App.css';

const App = () => {
  return (
    <div className="main-content">
      <Header />
      <ImageSlider />
    </div>
  );
}

export default App;
