import { createAction } from 'redux-actions'
import { CALL_API } from 'redux-api-middleware'
import { PROFILE_REQUEST, 
         PROFILE_SUCCESS, 
         PROFILE_FAILURE,
         RENEW_PROFILE,
         PROFILE_POST_REQUEST,
         PROFILE_POST_SUCCESS,
         PROFILE_POST_FAILURE
          } from '../constants/ActionTypes'
import Profile from '../model/Profile'
import Immutable from 'immutable'

//契約者情報取得
export const getProfile = () => {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:3001/profile',
            method: 'GET',
            types: [
                PROFILE_REQUEST,
                {
                    type: PROFILE_SUCCESS,
                    payload: handleSuccess
                },
                PROFILE_FAILURE
            ]
        }
    }    
}
// 契約者情報取得 通信成功時処理
const handleSuccess = (action, state, res) => {    
    return res.json().then(json => new Profile(json))
}


//契約者情報更新(ストア)
export const renewProfile = createAction(
  RENEW_PROFILE,
  (data) => ({data: data})
)

//契約者情報更新(サーバへポスト)
export const postProfile = (values) => {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:3001/postData',
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values.toJS()),
            types: [
                PROFILE_POST_REQUEST,
                PROFILE_POST_SUCCESS,
                PROFILE_POST_FAILURE
            ]
        }
    }    
}
const postSuccess = (action, state, res) => {    
    return res.json()
}