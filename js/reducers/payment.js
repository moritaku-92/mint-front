import { handleActions } from 'redux-actions'
import {
  PAYMENT_POST_REQUEST,
  PAYMENT_POST_SUCCESS,
  PAYMENT_POST_FAILURE
} from '../constants/ActionTypes'

const initialState = {}

export const payment = handleActions({

  [PAYMENT_POST_REQUEST]: (state, action) => {
    return Object.assign({}, state)
  },

  [PAYMENT_POST_SUCCESS]: (state, action) => {
    return Object.assign({}, state, action.payload)
  },

  [PAYMENT_POST_FAILURE]: (state, action) => {
    return Object.assign({}, state)
  }

}, initialState)
