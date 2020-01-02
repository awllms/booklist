import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsProductFetching } from '../../redux/shop/shop.selectors';

import Spinner from '../../components/Spinner/Spinner';
import HomePage from './HomePage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProductFetching,
});

const HomePageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(HomePage);

export default HomePageContainer;