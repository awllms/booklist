import React from 'react';

import img404 from '../../assets/404.png';

import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-page'>
          <div className='error-boundary-image-container'>
            <img className='error-boundary-image' src={img404} alt='404'/>
          </div>
          <h3>Oops! Something went wrong.</h3>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;