import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePageContainer from './pages/HomePage/HomePageContainer';
import ProductsPageContainer from './pages/ProductsPage/ProductsPageContainer';
import ShopPageContainer from './pages/ShopPage/ShopPageContainer';
import CategoriesPageContainer from './pages/CategoriesPage/CategoriesPageContainer';
import CheckoutPageContainer from './pages/CheckoutPage/CheckoutPageContainer';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import AccountPage from './pages/AccountPage/AccountPage';
import ThankYouPage from './pages/ThankYouPage/ThankYouPage';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Alert from './components/Alert/Alert';

import { fetchProductsStart, fetchCategoriesStart } from './redux/shop/shop.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

const App = ({ fetchProductsStart, fetchCategoriesStart, currentUser, checkUserSession }) => {

  useEffect(() => {
    fetchProductsStart();
    fetchCategoriesStart();
    checkUserSession();

  }, [fetchProductsStart, fetchCategoriesStart, checkUserSession])

  return (
    <React.Fragment>
      <Alert />
      <div className="main-content">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
          <Route path='/products' component={ProductsPageContainer} />
          <Route exact path='/shop' component={ShopPageContainer} />
          <Route path='/categories' component={CategoriesPageContainer} />
          <Route exact path='/checkout' component={CheckoutPageContainer} />
          <Route 
            exact 
            path='/signin' 
            render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} 
          />
          <Route 
            exact 
            path='/account' 
            render={() => !currentUser ? (<Redirect to='/signin' />) : (<AccountPage />)} 
          />
          <Route exact path='/thank-you' component={ThankYouPage} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  fetchProductsStart: () => dispatch(fetchProductsStart()),
  fetchCategoriesStart: () => dispatch(fetchCategoriesStart()),
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
