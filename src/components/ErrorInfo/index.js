import React from 'react';
import './style.css';

const ErrorInfo = () => (
  <p className="ErrorInfo-api-error">
    Sorry, but Recipe Search API responded with an error. <br />
    <br />
    This is ReactJS demo app and allows 5 requests per minute for a simple
    testing purpose only.<br />
    <br />
    Please try again by searching for a new recipe.
  </p>
);

export default ErrorInfo;
