import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsOrderSetting } from '../../redux/orders/orders.selectors';

import Spinner from '../../components/Spinner/Spinner';
import CheckoutPage from './CheckoutPage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsOrderSetting
});

const CheckoutPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CheckoutPage);

export default CheckoutPageContainer;
