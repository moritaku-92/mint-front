import { combineReducers } from 'redux'
import { syncHistoryWithStore,routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form/immutable'
import { navigationDrawer } from './navigationDrawer'
import { bottomNavigation } from './bottomNavigation'
import { payment } from './payment'
import { balance } from './balance'
const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  navigationDrawer,
  bottomNavigation,
  payment,
  balance
})

export default rootReducer
