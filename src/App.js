import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/Homepage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ShopPage from './pages/ShopPage/ShopPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
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
          <Route path='/shop' component={ShopPage} />
          <Route path='/categories' component={CategoriesPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};


export default App;
