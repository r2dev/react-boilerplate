import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store'
import { hashHistory, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import createHistory from 'history/lib/createHashHistory'
import Root from './containers/Root'

const store = configureStore(hashHistory)
const createScrollHistory = useScroll(createHistory)
const appHistory = useRouterHistory(createScrollHistory)()
const history = syncHistoryWithStore(appHistory, store)

ReactDOM.render(
<Root store={store} history={history} />,
    document.getElementById('container')
)
