import React from 'react';

import BreadCrumbNav from '../BreadCrumbNav/BreadCrumbNav';
import CustomButton from '../CustomButton/CustomButton';
import productImage from '../../assets/product.jpg';

import './ProductItem.scss';


const ProductItem = ({ match }) => {
  console.log(match)
  return (
    <React.Fragment>
      <BreadCrumbNav />
      <div className='product-item'>
        <div className='product-item-top'>
          <div className='product-image'>
            <img src={productImage} alt='book' />
          </div>
          <div className='product-details'>
            <h2>Unfu*ck Yourself</h2>
            <h3>Get Out Of Your Head and Into Your Life</h3>
            <span className='product-details-text'><span className='product-details-text-bold'>By:</span><a href='/'>Gary John Bishop</a></span>
            <span className='product-details-text'><span className='product-details-text-bold'>Narrated By:</span><a href='/'>Gary John Bishop</a></span>
            <span className='product-details-text'><span className='product-details-text-bold'>Length:</span>3 hrs and 23mins</span>
            <span className='product-details-text'><span className='product-details-text-bold'>Release Date:</span>08-01-17</span>
            <span className='product-details-text'><span className='product-details-text-bold'>Language:</span>English</span>
            <span className='product-details-text'><span className='product-details-text-bold'>Publisher:</span><a href='/'>Harper Audio</a></span>

            <span className='product-price'>$10</span>
            <CustomButton>Add to Cart</CustomButton>
            <div className='product-share'>
              <span className='share-text'>Share:</span>
            </div>
          </div>
        </div>
        <div className='product-item-bottom'>
          <div className='product-description'>
            <h3>Publisher Summary</h3>
            <div className='product-description-text'>
            <p>New York Times Best Seller</p>

<p>Joining the ranks of The Life-Changing Magic of Not Giving a F*ck, The Subtle Art of Not Giving a F*ck, 
You Are a Badass, and F*ck Feelings is this refreshing, BS-free self-empowerment guide that offers an 
honest, no-nonsense, tough-love approach to help you move past self-imposed limitations.</p>

<p>Are you tired of feeling f*cked up? If you are, Gary John Bishop has the answer. In this straightforward 
handbook, he gives you the tools and advice you need to demolish the slag weighing you down and 
become the truly unf*cked version of yourself. “Wake up to the miracle you are,” he directs. “Here’s 
what you’ve forgotten: You’re a f*cking miracle of being.” It isn’t other people that are standing in your 
way; it isn’t even your circumstances that are blocking your ability to thrive. It’s yourself and the negative 
self-talk you keep telling yourself.</p> 

<p>In Unf*ck Yourself, Bishop leads you through a series of seven assertions:</p> 

<p>I am willing</p>
<p>I am wired to win</p> 
<p>I got this</p> 
<p>I embrace the uncertainty</p> 
<p>I am not my thoughts; I am what I do</p> 
<p>I am relentless</p> 
<p>I expect nothing and accept everything</p> 
<p>Lead the life you were meant to have - Unf*ck Yourself.</p> 

<p>&copy; Gary John Bishop (P)2017 HarperCollins Publishers</p>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductItem;