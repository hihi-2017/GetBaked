import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'

import Store from './store'
import App from './components/App'

const history = createBrowserHistory()
const store = Store(history)

store.subscribe(() => {
  console.log('Logging', store.getState())
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById('app')
  )
})
