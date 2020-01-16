import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePageContainer from './pages/HomePage/HomePageContainer';
import ProductsPageContainer from './pages/ProductsPage/ProductsPageContainer';
import ShopPageContainer from './pages/ShopPage/ShopPageContainer';
import CategoriesPageContainer from './pages/CategoriesPage/CategoriesPageContainer';
import CheckoutPageContainer from './pages/CheckoutPage/CheckoutPageContainer';
import AuthorPageContainer from './pages/AuthorsPage/AuthorsPageContainer';

import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import AccountPage from './pages/AccountPage/AccountPage';
import ThankYouPage from './pages/ThankYouPage/ThankYouPage';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Alert from './components/Alert/Alert';

import { fetchProductsStart, fetchCategoriesStart } from './redux/shop/shop.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCartHidden } from './redux/cart/cart.selectors';
import { selectNavHidden } from './redux/nav/nav.selectors';

import { checkUserSession } from './redux/user/user.actions';
import { toggleCartHidden } from './redux/cart/cart.actions';
import { toggleNavHidden } from './redux/nav/nav.actions';

import './App.css';

const App = ({ 
  fetchProductsStart, 
  fetchCategoriesStart, 
  currentUser, 
  checkUserSession, 
  hidden, 
  toggleCartHidden,
  navHidden,
  toggleNavHidden }) => {

  useEffect(() => {
    fetchProductsStart();
    fetchCategoriesStart();
    checkUserSession();

  }, [fetchProductsStart, fetchCategoriesStart, checkUserSession])

  const onAppClick = () => {
    if (hidden === false) {
      toggleCartHidden();
    }
    if (navHidden === false) {
      toggleNavHidden();
    }
  };

  return (
    <React.Fragment>
      <Alert />
      <div className="main-content" onClick={onAppClick}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
          <Route path='/products' component={ProductsPageContainer} />
          <Route exact path='/shop' component={ShopPageContainer} />
          <Route exact path='/categories' component={ShopPageContainer} />
          <Route path='/categories/:categoryTitle' component={CategoriesPageContainer} />
          <Route exact path='/checkout' component={CheckoutPageContainer} />
          <Route path='/authors/:authorName' component={AuthorPageContainer} />
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
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  navHidden: selectNavHidden
});

const mapDispatchToProps = dispatch => ({
  fetchProductsStart: () => dispatch(fetchProductsStart()),
  fetchCategoriesStart: () => dispatch(fetchCategoriesStart()),
  checkUserSession: () => dispatch(checkUserSession()),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  toggleNavHidden: () => dispatch(toggleNavHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
