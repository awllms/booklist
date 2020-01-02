import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsProductLoaded } from '../../redux/shop/shop.selectors';

import Spinner from '../../components/Spinner/Spinner';
import ProductsPage from './ProductsPage';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsProductLoaded(state)
});

const ProductPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(ProductsPage);

export default ProductPageContainer;

