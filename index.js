import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './js/containers/App'
import configureStore from './js/store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router, Route, hashHistory, IndexRoute, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history'
import * as Colors from 'material-ui/styles/colors'
injectTapEventPlugin()

const store = configureStore()
const history = syncHistoryWithStore(useRouterHistory(createHashHistory)({ queryKey: false }), store)

let rootElement = document.getElementById('root')

// ここの色を変えると一括でmaterial-uiの色が変わる
// （指定していない箇所のみ）
const muiTheme = getMuiTheme({
  palette: {
    fontFamily: 'Noto Sans Japanese, sans-serif',
    primary1Color: '#bee0c2',
    primary2Color: '#C51162',
    accent1Color: '#C5CAE9',
    disabledColor: Colors.darkBlack,
}
});

const rootRoute = {
  path: '/',
  component: App,
    childRoutes: [
      require('./js/containers/routes/Top'),
      require('./js/containers/routes/Payment'),
      require('./js/containers/routes/Balance')
    ]
} 


render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={history} routes={rootRoute} />
    </MuiThemeProvider>
  </Provider>,
  rootElement
)
