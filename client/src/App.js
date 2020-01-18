import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Alert from './components/Alert/Alert';
import Spinner from './components/Spinner/Spinner';

import { fetchProductsStart, fetchCategoriesStart } from './redux/shop/shop.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCartHidden } from './redux/cart/cart.selectors';
import { selectNavHidden } from './redux/nav/nav.selectors';

import { checkUserSession } from './redux/user/user.actions';
import { toggleCartHidden } from './redux/cart/cart.actions';
import { toggleNavHidden } from './redux/nav/nav.actions';

import './App.css';

const HomePageContainer = lazy(() => import('./pages/HomePage/HomePageContainer'));
const ProductsPageContainer = lazy(() => import('./pages/ProductsPage/ProductsPageContainer'));
const ShopPageContainer = lazy(() => import('./pages/ShopPage/ShopPageContainer'));
const CategoriesPageContainer = lazy(() => import('./pages/CategoriesPage/CategoriesPageContainer'));
const CheckoutPageContainer = lazy(() => import('./pages/CheckoutPage/CheckoutPageContainer'));
const AuthorPageContainer = lazy(() => import('./pages/AuthorsPage/AuthorsPageContainer'));

const SignInAndSignUpPage = lazy(() => import('./pages/SignInAndSignUpPage/SignInAndSignUpPage'));
const AccountPage = lazy(() => import('./pages/AccountPage/AccountPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage/ThankYouPage'));

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

  const onAppClick = (event) => {
    const className = event.target.className;
    if (!hidden) {
      if (className !== 'arrow' && 
          className !== 'value' &&
          className !== 'shopping-icon') {
        toggleCartHidden();
      } 
    }
    if (!navHidden) {
      if (className !== 'nav-option' && className !== 'nav-icon') {
        toggleNavHidden();
      }
    }
  };

  return (
    <React.Fragment>
      <Alert />
      <div className="main-content" onClick={(event) => onAppClick(event)}>
        <Header />
          <Switch>
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
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
