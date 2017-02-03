import {createAction} from 'redux-actions'
import {CALL_API} from 'redux-api-middleware'
import {
  BALANCE_GET_REQUEST,
  BALANCE_GET_SUCCESS,
  BALANCE_GET_FAILURE
} from '../constants/ActionTypes'
import Billing from '../model/Billing'
import immutable from 'immutable'

// 支払情報取得成功時処理
const handleSuccess = (action, state, res) => {
  let billings = []
  var number
  var response = res
    .json()
    .then(json => {
      json.forEach((element, index) => {
        billings.push(new Billing(element))
      })
      number = json.length - 1;
      return {data: billings, index: number}
    })
  return response
}

// 支払情報取得
export const getBilling = () => {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3001/changePaymentDetails?contract=xxxxxxxxxx`,
      method: 'GET',
      types: [
        BILLING_REQUEST, {
          type: BILLING_SUCCESS,
          payload: handleSuccess
        },
        BILLING_FAILURE
      ]
    }
  }
}
