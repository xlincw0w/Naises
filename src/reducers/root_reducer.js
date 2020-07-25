import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { mainReducer } from './MainReducer/main_reducer'

export default function configureStore() {
    return createStore(
        combineReducers({
            mainReducer,

        }, applyMiddleware(thunk)),
    );
}