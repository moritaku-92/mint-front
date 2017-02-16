import { handleActions } from 'redux-actions'
import {BALANCE_GET_REQUEST, BALANCE_GET_SUCCESS, BALANCE_GET_FAILURE} from '../constants/ActionTypes'

const initialState = {result:{message:"????"}}

export const balance = handleActions({

  [BALANCE_GET_REQUEST]: (state, action) => {
    return Object.assign({}, state)
  },

  [BALANCE_GET_SUCCESS]: (state, action) => {
    return Object.assign({}, state, action.payload)
  },

  [BALANCE_GET_FAILURE]: (state, action) => {
    return Object.assign({}, state)
  }

}, initialState)
