import React from 'react';
import Header from './components/Header/Header';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Directory from './components/Directory/Directory';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <div className="main-content">
        <Header />
        <ImageSlider />
        <Directory />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
