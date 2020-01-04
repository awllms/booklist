import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsProductFetching } from '../../redux/shop/shop.selectors';

import Spinner from '../../components/Spinner/Spinner';
import CategoriesPage from './CategoriesPage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProductFetching,
});

const CategoriesPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CategoriesPage);

export default CategoriesPageContainer; 