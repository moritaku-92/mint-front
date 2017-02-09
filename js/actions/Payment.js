import {createAction} from 'redux-actions'
import {CALL_API} from 'redux-api-middleware'
import {
  PAYMENT_POST_REQUEST,
  PAYMENT_POST_SUCCESS,
  PAYMENT_POST_FAILURE
} from '../constants/ActionTypes'



export const transfer = (values) => {
  var data = values.toJS()
  var sendData = [data.from, data.to, data.amount]
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3001/postData`,
      method: 'POST',
      headers: {
                'content-type': 'application/json',
                'dataType' : 'JSON',
            },
      body: JSON.stringify(sendData),
      types: [
        PAYMENT_POST_REQUEST,
        PAYMENT_POST_SUCCESS,
        PAYMENT_POST_FAILURE
      ]
    }
  }
}
