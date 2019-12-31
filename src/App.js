import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePageContainer from './pages/HomePage/HomePageContainer';
import ProductsPageContainer from './pages/ProductsPage/ProductsPageContainer';
import ShopPageContainer from './pages/ShopPage/ShopPageContainer';
import CategoriesPageContainer from './pages/CategoriesPage/CategoriesPageContainer';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { fetchProductsStart, fetchCategoriesStart } from './redux/shop/shop.actions';


import './App.css';

const App = ({ fetchProductsStart, fetchCategoriesStart}) => {

  useEffect(() => {
    fetchProductsStart()
    fetchCategoriesStart()
  }, [fetchProductsStart, fetchCategoriesStart])

  return (
    <React.Fragment>
      <div className="main-content">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
          <Route path='/products' component={ProductsPageContainer} />
          <Route path='/shop' component={ShopPageContainer} />
          <Route path='/categories' component={CategoriesPageContainer} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchProductsStart: () => dispatch(fetchProductsStart()),
  fetchCategoriesStart: () => dispatch(fetchCategoriesStart())
});

export default connect(null, mapDispatchToProps)(App);
