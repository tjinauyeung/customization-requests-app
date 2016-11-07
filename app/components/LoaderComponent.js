import React from 'react';
import ReactDOM from 'react-dom';

class LoaderComponent extends React.Component {
  render() {
    return (
      <div className="loader__container">
        <div className="loader"></div>
      </div>
    )  
  }
};

export default LoaderComponent;
