import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App/';
import reducers from './reducers';

const createStoreWithMiddleware = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
