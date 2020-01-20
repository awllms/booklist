import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAlertItem } from '../../redux/alert/alert.selectors';

import './Alert.scss';

export const Alert = ({ alert }) => {

  return (
    <React.Fragment>
      { 
        alert ?
          <section className='alert-container'>
            <div className={`alert ${alert.status}`}>
              <div className='alert-content'>
                <span className='alert-message'>
                  {alert.message}
                </span>
              </div>
            </div>
          </section>
        : <section className='alert-container'></section>
      }
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  alert: selectAlertItem
});

export default connect(mapStateToProps)(Alert);