import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from './state';
import rootReducer from './reducers/index';
import App from './App';

const initState = {selectedTab: 1};

ReactDOM.render(
  <StateProvider initialState={initState} reducer={rootReducer}>
    <App />
  </StateProvider>,
 document.getElementById('root'));
