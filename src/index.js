import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import reducer from './reducer';
import LogIn from './components/LogIn';
import App from './components/App';
import PortfolioRoot from './containers/PortfolioRoot';
import AdminPanel from './components/AdminPanel';
import ProjectDashboard from './containers/ProjectDashboard';
import { Provider } from 'react-redux';
import NotFound from './components/NotFound';

// Store
const store = applyMiddleware(thunk)(createStore)(reducer);
const history = createHashHistory({
  queryKey: false
});

const routes = (
  <Route component={App}>
    <Route path='/' component={PortfolioRoot}>
      <IndexRoute component={ProjectDashboard} />
    </Route>
    <Route path='/admin' component={AdminPanel}>
      <Route path='log-in' component={LogIn} />
    </Route>
    <Route path='*' component={NotFound} />
  </Route>
);

// Render
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>
), document.getElementById('react-mount'));
