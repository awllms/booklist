import React from 'react';
import DirectoryItems from '../DirectoryItems/DirectoryItems';

import './Directory.scss';

const Directory = () => {
  return (
    <section className='directory'>
      <DirectoryItems title='Best Sellers' />
      <DirectoryItems title='New Releases'/>
      <DirectoryItems title='Coming Soon' />
    </section>
  );
};

export default Directory;