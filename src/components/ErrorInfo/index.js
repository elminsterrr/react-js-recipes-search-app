import React from 'react';
import './style.css';

const ErrorInfo = () => (
  <p className="ErrorInfo-api-error">
    Sorry, but Recipe Search API responded with an error. <br />
    This is react demo app and allows 5 request per minute for simple testing
    purpose only.
  </p>
);

export default ErrorInfo;
