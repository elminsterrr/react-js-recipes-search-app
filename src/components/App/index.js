import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchBar from '../../containers/SearchBar';
import Results from '../../containers/Results';
import ShowFavorites from '../../containers/ShowFavorites';

const App = () => (
  <MuiThemeProvider>
    <div>
      <SearchBar />
      <ShowFavorites />
      <Results />
    </div>
  </MuiThemeProvider>
);

export default App;
