import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsProductFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import HomePage from './HomePage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProductFetching,
});

const HomePageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(HomePage);

export default HomePageContainer;