import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route} from  'react-router-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import reduxPromise from 'redux-promise';

const middleware = applyMiddleware(reduxPromise);
const store = createStore(rootReducer, {}, middleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
