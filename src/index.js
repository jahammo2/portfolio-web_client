import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import reducer from './reducer';
import App from './components/App';
import PortfolioRoot from './containers/PortfolioRoot';
import ProjectDashboard from './components/ProjectDashboard';
import ProjectPage from './containers/ProjectPage';
import AboutMe from './containers/AboutMe';
import { Provider } from 'react-redux';
import NotFound from './components/NotFound';

// Store
const store = applyMiddleware(thunk)(createStore)(reducer);
const history = createBrowserHistory({
  queryKey: false
});

const routes = (
  <Route component={App}>
    <Route path='/' component={PortfolioRoot}>
      <IndexRoute component={ProjectDashboard} />
      <Route path='projects/:projectId' component={ProjectPage} />
      <Route path='about-me' component={AboutMe} />
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
