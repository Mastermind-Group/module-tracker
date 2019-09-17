import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers/rootReducer'
import logger from 'redux-logger'
import App from './App'
import JssProvider from 'react-jss/lib/JssProvider'
import { createGenerateClassName } from '@material-ui/core/styles'

import './index.css'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

const generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS: false,
    productionPrefix: 'c',
})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <JssProvider generateClassName={generateClassName}>
                <App />
            </JssProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
)
