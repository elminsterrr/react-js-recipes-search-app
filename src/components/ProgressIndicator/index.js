import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import './style.css';

const ProgressIndicator = () => (
  <div className="ProgressIndicator-div">
    Searching...
    <LinearProgress mode="indeterminate" />
  </div>
);

export default ProgressIndicator;
