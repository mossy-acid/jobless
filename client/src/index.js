import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore.js';
import App from './components/app';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import jobView from './components/jobView.jsx';
import Calendar from './components/calendar.jsx';
import GitJobs from './components/GitJobs.jsx';


require('file?name=[name].[ext]!./index.html');

// Require stylesheets
require('./stylesheets/sass/style.scss');
require('./stylesheets/sass/joblist.scss');
require('./stylesheets/sass/dashboard.scss');
require('./stylesheets/sass/jobadd.scss');
require('./stylesheets/sass/jobview.scss');
require('file?name=[name].[ext]!./stylesheets/front.css');
require('file?name=[name].[ext]!./index.html');
require('file?name=[name].[ext]!./front.html');
require('file?name=[name].[ext]!./assets/woman-typing-writing-windows.jpg');
require('file?name=[name].[ext]!./assets/ripple.gif');


const initalState =  {
    debug: false,
    user: {},
    job: {},
  };

let store = configureStore(initalState);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} />
      <Route path='/jobview' component={jobView}/>
      <Route path='/calendar' component={Calendar}/>
      <Route path='/search' component={GitJobs}/>
    </Router>
  </Provider>), document.getElementById('app'));
