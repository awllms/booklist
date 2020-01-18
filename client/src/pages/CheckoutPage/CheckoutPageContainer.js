import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsOrderLoading } from '../../redux/orders/orders.selectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CheckoutPage from './CheckoutPage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsOrderLoading
});

const CheckoutPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CheckoutPage);

export default CheckoutPageContainer;
