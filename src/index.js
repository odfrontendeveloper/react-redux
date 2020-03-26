import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import './index.css';
import App from './App';
import Page from './components/Page';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store/reducers/index.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './onEscape.js';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/login' component={App} />
      <Route path='/page' component={Page} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
