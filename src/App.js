import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage/Homepage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ShopPage from './pages/ShopPage/ShopPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { firestore, convertProductsSnapshot, convertCategoriesSnapshotToMap } from './firebase/firebase.utils';
import { updateProducts, updateCategories } from './redux/shop/shop.actions';
import './App.css';

const App = ({ updateProducts, updateCategories}) => {

  useEffect(() => {
    const productsRef = firestore.collection('products');
    const categoriesRef = firestore.collection('categories')
    productsRef.onSnapshot(async snapShot => {
      const productList = convertProductsSnapshot(snapShot);
      updateProducts(productList);
    })
    categoriesRef.onSnapshot(async snapShot => {
      const categoriesMap = convertCategoriesSnapshotToMap(snapShot);
      updateCategories(categoriesMap);
    })
  }, [updateProducts, updateCategories])

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

const mapDispatchToProps = dispatch => ({
  updateProducts: productList => dispatch(updateProducts(productList)),
  updateCategories: categoriesMap => dispatch(updateCategories(categoriesMap))
});

export default connect(null, mapDispatchToProps)(App);
