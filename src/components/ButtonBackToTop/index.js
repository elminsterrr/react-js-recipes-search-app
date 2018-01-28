import React from 'react';
import './style.css';

const ButtonBackToTop = () => (
  <div className="ButtonBackToTop-aligner">
    <div className="ButtonBackToTop-scroll-top">
      <button
        className="btn btn-secondary"
        onClick={() => window.scrollTo(0, 0)}
      >
        Back to top
      </button>
    </div>
  </div>
);

export default ButtonBackToTop;
