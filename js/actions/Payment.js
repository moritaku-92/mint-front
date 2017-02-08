import {createAction} from 'redux-actions'
import {CALL_API} from 'redux-api-middleware'
import {
  PAYMENT_POST_REQUEST,
  PAYMENT_POST_SUCCESS,
  PAYMENT_POST_FAILURE
} from '../constants/ActionTypes'
import immutable from 'immutable'

export const transfer = createAction(
    PAYMENT_POST_SUCCESS
)