import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './index.html';
import { createStore } from 'redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import reducers from './reducers';
import LogIn from './components/LogIn';
import App from './components/App';
// import PortfolioRoot from './components/PortfolioRoot';
import AdminPanel from './components/AdminPanel';

// Store
const store = createStore(reducers);

function handleAuth(role, nextState, replaceState) {
  if (!SessionStore.isUserAuthenticatedForRole(role)) {
    const logInPath = '/admin/log-in';

    replaceState(null, logInPath, {
      ...nextState.location.query,
      nextPath: nextState.location.pathname
    });
  }
}

const handleAdminLogIn = handleAuth.bind(null, 'admin');

const routes = (
  <Route component={App}>
    <IndexRedirect to="hashHistory" />
    // <Route path="/" component={PortfolioRoot}>
    // <Route path="admin" component={adminPanel} onEnter={handleAdminLogIn}>
    <Route path="admin" component={AdminPanel}>
      <Route path="log-in" component={LogIn} />
    </Route>
  </Route>
);

// Render
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('#react-mount')
);
