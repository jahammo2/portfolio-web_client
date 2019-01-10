import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
// import { createBrowserHistory } from 'history';
import App from './components/App';
import PortfolioRoot from './containers/PortfolioRoot';
import ProjectDashboard from './components/ProjectDashboard';
import ProjectPage from './containers/ProjectPage';
import AboutMe from './containers/AboutMe';
import { Provider } from 'react-redux';
import NotFound from './components/NotFound';
import storeService from './services/store';

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
  <Provider store={storeService.getStore()}>
    <Router history={createBrowserHistory()}>{routes}</Router>
  </Provider>
), document.getElementById('react-mount'));
