import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers/index'
import Home from './containers/Home'
import searchAction from './actions/searchAction'

const store = createStore(rootReducer)

// initialize store
const searchThunk = searchAction(store.dispatch)
searchThunk('')

const Styles = require('./index.css')

render(
    <Provider store={store}>
      <Home />
    </Provider>,
    document.getElementById('index')
)
