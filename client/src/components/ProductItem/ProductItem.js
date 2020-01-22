import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import BreadCrumbNav from '../BreadCrumbNav/BreadCrumbNav';
import CustomButton from '../CustomButton/CustomButton';

import { addItem } from '../../redux/cart/cart.actions';
import { selectProduct } from '../../redux/shop/shop.selectors';

import './ProductItem.scss';

export const ProductItem = ({ product, addItem }) => {
  const item = product[0];
  const { 
    title,
    imageUrl,
    subTitle,
    author,
    narrator,
    length,
    releaseDate,
    language,
    publisher,
    price,
    description
   } = item;
  const authorURL = encodeURIComponent(author.replace(/[\s]/g, '-').toLowerCase());
  const narratorURL = encodeURIComponent(narrator.replace(/[\s]/g, '-').toLowerCase());
  const publisherURL = encodeURIComponent(publisher.replace(/[\s]/g, '-').toLowerCase());
  return (
    <React.Fragment>
      <BreadCrumbNav title={title} />
      <section className='product-item'>
        <div className='product-item-top'>
          <div className='product-image'>
            <img src={imageUrl} alt='book' />
          </div>
          <div className='product-details'>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <span className='product-details-text'>
              <span className='product-details-text-bold'>By:</span>
              <Link 
                to={`/authors/${authorURL}`}
              >{author}</Link>
            </span>
            <span className='product-details-text'>
              <span className='product-details-text-bold'>Narrated By:</span>
              <Link 
                to={`/authors/${narratorURL}`}
              >{narrator}</Link>
            </span>
            <span className='product-details-text'>
              <span className='product-details-text-bold'>Length:</span>
              {length}
            </span>
            <span className='product-details-text'>
              <span className='product-details-text-bold'>Release Date:</span>
              {releaseDate}
            </span>
            <span className='product-details-text'>
              <span className='product-details-text-bold'>Language:</span>
              {language}
            </span>
            <span className='product-details-text'>
              <span className='product-details-text-bold'>Publisher:</span>
              <Link 
                to={`/authors/${publisherURL}`}
              >{publisher}</Link>
            </span>

            <span className='product-price'>${price}</span>
            <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
            <div className='product-share'>
              <span className='share-text'>Share:</span>
                <div className='social-icons'>
                  <img src='https://i.ibb.co/LgFdhmx/facebook.png' alt='facebook' />
                  <img src='https://i.ibb.co/fkfzVPc/twitter.png' alt='twitter' />
                  <img src='https://i.ibb.co/RchS8jc/pinterest.png' alt='pinterest' />
                  <img src='https://i.ibb.co/1MdrS6M/google-plus.png' alt='google plus' />
                  <img src='https://i.ibb.co/5K7KhCF/envelope.png' alt='email' />
                </div>
            </div>
          </div>
        </div>
        <div className='product-item-bottom'>
          <div className='product-description'>
            <h3>Publisher Summary</h3>
            <div className='product-description-text'>
              {ReactHtmlParser(description)}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.url)(state)
});

export const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);