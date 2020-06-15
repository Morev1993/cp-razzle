import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import configureStore from './configure-store';
import { Provider } from 'react-redux';
import withTracker from './withTracker';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    hydrate(
      <Provider store={store}>
        {withTracker(App)}
      </Provider>,
      document.getElementById('root')
    );
  });
}
