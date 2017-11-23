import React from 'react';
import Gameboard from './components/Gameboard';
import { createStore } from 'redux'
import reducers from './reducers/reducers'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

let store = createStore(reducers);

render(
    <Provider store={store}>
  <Gameboard />
    </Provider>,
  document.getElementById('root')
);