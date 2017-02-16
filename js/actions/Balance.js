import {createAction} from 'redux-actions'
import {CALL_API} from 'redux-api-middleware'
import {BALANCE_GET_REQUEST, BALANCE_GET_SUCCESS, BALANCE_GET_FAILURE} from '../constants/ActionTypes'
import immutable from 'immutable'

// 支払情報取得
export const getBilling = (value) => {
  var sendJson = {
    "jsonrpc": "2.0",
    "method": "query",
    "params": {
      "type": 1,
      "chaincodeID": {
        "name": "mycc"
      },
      "ctorMsg": {
        "function": "query",
        "args": [value]
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
      types: [BALANCE_GET_REQUEST, BALANCE_GET_SUCCESS, BALANCE_GET_FAILURE]
    }
  }
}
