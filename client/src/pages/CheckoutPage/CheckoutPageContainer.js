import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsOrderLoading } from '../../redux/orders/orders.selectors';

import Spinner from '../../components/Spinner/Spinner';
import CheckoutPage from './CheckoutPage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsOrderLoading
});

const CheckoutPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CheckoutPage);

export default CheckoutPageContainer;
