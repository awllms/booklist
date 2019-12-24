import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/Homepage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <div className="main-content">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/products' component={ProductsPage} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};


export default App;
