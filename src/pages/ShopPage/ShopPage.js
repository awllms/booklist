import React from 'react';
import BreadCrumbNav from '../../components/BreadCrumbNav/BreadCrumbNav';
import CategoryOverview from '../../components/CategoryOverview/CategoryOverview';

const ShopPage = ({ match }) => {
  const shopPath = match.path.replace('/', '');
  const shopTitle = shopPath[0].toUpperCase() + shopPath.slice(1);
  return (
    <React.Fragment>
      <BreadCrumbNav title={shopTitle} />
      <CategoryOverview />
    </React.Fragment>
  );
};

export default ShopPage;