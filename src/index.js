import React from 'react'
import reactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Main from './Layout/Main/main'
import configureStore from './reducers/root_reducer'

const store = configureStore()

reactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
)