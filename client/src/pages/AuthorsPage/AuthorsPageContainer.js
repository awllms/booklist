import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsProductFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import AuthorsPage from './AuthorsPage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProductFetching
});

const AuthorsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(AuthorsPage);

export default AuthorsPageContainer;  