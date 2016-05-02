import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomePage from './containers/HomePage'


const routes = (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
        </Route>
    </div>
)


export default routes