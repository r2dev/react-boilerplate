import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const indexReducer = combineReducers({
    routing: routerReducer,
})

export default indexReducer
