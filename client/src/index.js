import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tournament from './containers/TournamentContainer'
import Hole from './containers/HoleContainer'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render((
  <Router>
    <Provider store={store}>
      <React.Fragment>
        <Route path="/" component={App} />
        <Route path="/tournament" component={Tournament} />
        <Route path="hole" component={Hole} />
      </React.Fragment>
    </Provider>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
