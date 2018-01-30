import React from 'react';

import SearchBar from '../../containers/SearchBar';
import Results from '../../containers/Results';
import ShowFavorites from '../../containers/ShowFavorites';

const App = () => (
  <div>
    <SearchBar />
    <ShowFavorites />
    <Results />
  </div>
);

export default App;
