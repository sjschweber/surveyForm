import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {surveyForm} from './reducers';
import * as serviceWorker from './serviceWorker';
import ReduxThunk from 'redux-thunk';
import {getName} from './actions/index.js'

const store = createStore(surveyForm, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

getName();


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
