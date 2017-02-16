import {createAction} from 'redux-actions'
import {CALL_API} from 'redux-api-middleware'
import {PAYMENT_POST_REQUEST, PAYMENT_POST_SUCCESS, PAYMENT_POST_FAILURE} from '../constants/ActionTypes'

export const transfer = (values) => {
  var data = values.toJS()
  var sendData = [data.from, data.to, data.amount]
  var sendJson = {
    "jsonrpc": "2.0",
    "method": "invoke",
    "params": {
      "type": 1,
      "chaincodeID": {
        "name": "mycc"
      },
      "ctorMsg": {
        "function": "invoke",
        "args": sendData
      }
    },
    "id": 1
  }

  return {
    [CALL_API]: {
      endpoint: `http://52.199.251.125:7050/chaincode`,
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(sendJson),
      types: [PAYMENT_POST_REQUEST, PAYMENT_POST_SUCCESS, PAYMENT_POST_FAILURE]
    }
  }
}