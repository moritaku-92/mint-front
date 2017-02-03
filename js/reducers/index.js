import { combineReducers } from 'redux'
import { syncHistoryWithStore,routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form/immutable'
import { navigationDrawer } from './navigationDrawer'
import { bottomNavigation } from './bottomNavigation'
const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  navigationDrawer,
  bottomNavigation
})

export default rootReducer
