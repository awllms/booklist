import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';

import { selectIsOrdersFetching } from '../../redux/orders/orders.selectors';
import Spinner from '../Spinner/Spinner';
import Orders from './Orders';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsOrdersFetching
});

const OrdersContainer = compose(
  connect(mapStateToProps),
  Spinner
)(Orders);

export default OrdersContainer;
