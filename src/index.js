import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* when invoked, return an instance of Redux store. We can use method to create store */
import {Provider} from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

/* pass down newly created store to our app Component as a prop. Reducer is in reducer file in src */
const store = createStore(shoppingListItemReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); /* call create store method where we pass reducer */

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>
  ,
  document.getElementById('root')
);
