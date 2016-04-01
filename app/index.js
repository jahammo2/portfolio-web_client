import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import './index.scss';
import './index.html';
import { getHistory } from './services/HistoryService';

const routes = (
  <Router history={getHistory()}>
    <Route path="/" component={PortfolioRoot}>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('react-mount'));
