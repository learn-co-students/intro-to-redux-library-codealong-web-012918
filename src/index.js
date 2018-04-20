import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import shoppingListItemReducer from 'src/reducers/shoppingListItemReducer.js';
import App from './App'
import './index.css'

const store = createStore(shoppingListItemReducer)

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
