import React from 'react';
import './style.css';

const ButtonBackToTop = () => (
  <div className="ButtonBackToTop-align-center">
    <button
      className="ButtonBackToTop-margins btn btn-secondary"
      onClick={() => window.scrollTo(0, 0)}
    >
      Back to top
    </button>
  </div>
);

export default ButtonBackToTop;
