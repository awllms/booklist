import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsProductFetching } from '../../redux/shop/shop.selectors';

import Spinner from '../../components/Spinner/Spinner';
import AuthorsPage from './AuthorsPage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProductFetching
});

const AuthorsPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(AuthorsPage);

export default AuthorsPageContainer;  