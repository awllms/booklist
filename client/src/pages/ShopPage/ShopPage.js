import React from 'react';
import BreadCrumbNav from '../../components/BreadCrumbNav/BreadCrumbNav';
import CategoriesOverview from '../../components/CategoriesOverview/CategoriesOverview';
import './ShopPage.scss';

export const ShopPage = ({ match }) => {
  
  const shopPath = match.path.replace('/', '');
  const shopTitle = shopPath[0].toUpperCase() + shopPath.slice(1);

  return (
    <React.Fragment>
      <BreadCrumbNav title={shopTitle} />
      <section className='shop-page'>
        <h2>{shopTitle}</h2>
        <CategoriesOverview />
      </section>
    </React.Fragment>
  );
};

export default ShopPage;