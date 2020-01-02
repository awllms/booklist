import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsProductFetching } from '../../redux/shop/shop.selectors';

import Spinner from '../../components/Spinner/Spinner';
import ShopPage from './ShopPage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProductFetching,
});

const ShopPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(ShopPage);

export default ShopPageContainer;