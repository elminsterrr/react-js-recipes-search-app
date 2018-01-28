import React from 'react';

const ButtonBackToTop = () => (
  <div className="aligner">
    <div className="scroll-top">
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
