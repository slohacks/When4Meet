import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

const defaultState = {};

const store = createStore(rootReducer, defaultState,
  composeWithDevTools(applyMiddleware(thunk)));

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export const history = createBrowserHistory();
export default store;
