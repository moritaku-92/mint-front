import { handleActions } from 'redux-actions'
import { BOTTOM_NAVIGATION_CHANGE } from '../constants/ActionTypes'

const initialState = { index: 0 }

export const bottomNavigation = handleActions({

  [BOTTOM_NAVIGATION_CHANGE]: (state, action) => {
    return Object.assign({}, state, {index: action.payload.index})
  }
}, initialState)
