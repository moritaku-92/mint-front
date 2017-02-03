import { handleActions } from 'redux-actions'
import { NAVIGATION_DRAWER_TOGGLE } from '../constants/ActionTypes'

const initialState = { open: false }

export const navigationDrawer = handleActions({

  [NAVIGATION_DRAWER_TOGGLE]: (state, action) => {
    return Object.assign({}, state, {open: !state.open})
  }
}, initialState)
