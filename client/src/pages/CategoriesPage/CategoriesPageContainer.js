import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsProductFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CategoriesPage from './CategoriesPage';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProductFetching
});

const CategoriesPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CategoriesPage);

export default CategoriesPageContainer;  