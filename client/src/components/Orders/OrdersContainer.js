import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';

import { selectIsOrdersFetching } from '../../redux/orders/orders.selectors';
import WithSpinner from '../WithSpinner/WithSpinner';
import Orders from './Orders';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsOrdersFetching
});

const OrdersContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Orders);

export default OrdersContainer;
