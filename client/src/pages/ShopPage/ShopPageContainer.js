import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsProductFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import ShopPage from './ShopPage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProductFetching,
});

const ShopPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ShopPage);

export default ShopPageContainer;