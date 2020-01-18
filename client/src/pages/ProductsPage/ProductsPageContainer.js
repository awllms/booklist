import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsProductLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import ProductsPage from './ProductsPage';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsProductLoaded(state)
});

const ProductPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProductsPage);

export default ProductPageContainer;

