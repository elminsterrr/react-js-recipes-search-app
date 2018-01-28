import React from 'react';
import './style.css';

import SearchBar from '../../containers/SearchBar';
import Results from '../../containers/Results';

const App = () => (
  <div>
    <SearchBar />
    <Results />
  </div>
);

export default App;
