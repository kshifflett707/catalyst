import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider, connect } from 'react-redux'

import App from './src/App.jsx'
import store from './store.jsx'



render(
  <Provider store={ store }>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, 
  
  document.getElementbyId('app')
);