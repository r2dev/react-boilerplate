import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import indexReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'

const loggerMiddleware = createLogger()
const configureStore = (history, initialState) => {
    const store = createStore(
        indexReducer,
        initialState,
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware,
                routerMiddleware(history)
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextIndexReducer = require('../reducers').default
            store.replaceReducer(nextIndexReducer)
        })
    }
    return store
}


export default configureStore
