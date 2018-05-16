import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers/index'
import Home from './containers/Home'

const store = createStore(rootReducer)

const Styles = require('./index.css')

render(
    <Provider store={store}>
      <Home />
    </Provider>,
    document.getElementById('index')
)
