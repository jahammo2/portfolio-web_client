import {
  applyMiddleware,
  createStore
} from 'redux';
import {
  composeWithDevTools
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import INITIAL_STATE from '../reducers/initialState';

class Store {
  constructor () {
    this.store = createStore(
      reducers,
      INITIAL_STATE,
      composeWithDevTools(applyMiddleware(thunk))
    );

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers').default;
        this.store.replaceReducer(nextRootReducer);
      });
    }
  }

  getStore () {
    return this.store;
  }
}

export default new Store();
