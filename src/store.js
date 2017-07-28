'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

// Navigation
import { Home } from './components/home'
import { Menu } from './components/menu'
import userReducer from './reducers/user'
// import menuReducer from './reducers/menu'

// Middleware
const middleware = () => {
    return applyMiddleware(logger())
}

export default createStore(
    combineReducers({
        user: userReducer,
        menu: (state, action) => Menu.router.getStateForAction(action, state) || state,
        home: (state, action) => Home.router.getStateForAction(action, state),
    }),
    middleware(),
)
