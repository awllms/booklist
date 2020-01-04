import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import BreadCrumbNav from '../../components/BreadCrumbNav/BreadCrumbNav';
import CustomButton from '../../components/CustomButton/CustomButton';

import './ThankYouPage.scss';

const ThankYouPage = ({ location, history }) => {
  return (
    <React.Fragment>
      <BreadCrumbNav title='BookList Thanks You'/>
      {
        location.state ?
          location.state.token ?
            <section className='thank-you-page'>
              <div className='thank-you'>
                <div className='image-container'>
                  <img src='https://i.ibb.co/PzKMPjS/thank-you-success.png' alt='success' />
                </div>
                <h2>Thank you for your purchase!</h2>
                <span className='details'>
                  Your order is confirmed.
                </span>
                <CustomButton onClick={() => history.push('/account')}>
                  View Order
                </CustomButton>
              </div>
            </section>
          : <Redirect to='/' />
        : <Redirect to='/' />
      }

    </React.Fragment>
  )
};

export default withRouter(ThankYouPage);