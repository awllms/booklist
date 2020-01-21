import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DirectoryItems from '../DirectoryItems/DirectoryItems';

import { selectShopBestSellers, 
         selectShopNewReleases, 
         selectShopComingSoon } from '../../redux/shop/shop.selectors';

import './Directory.scss';

export const Directory = ({ bestSellers, newReleases, comingSoon }) => {
  return (
    <section className='directory'>
      <DirectoryItems title='Best Sellers' items={bestSellers} />
      <DirectoryItems title='New Releases' items={newReleases} />
      <DirectoryItems title='Coming Soon' items={comingSoon} />
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  bestSellers: selectShopBestSellers,
  newReleases: selectShopNewReleases,
  comingSoon: selectShopComingSoon
});


export default connect(mapStateToProps)(Directory);