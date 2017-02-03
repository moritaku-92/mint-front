import { createAction } from 'redux-actions'
import {
  NAVIGATION_DRAWER_TOGGLE,
 } from '../constants/ActionTypes'

export const toggle = createAction(
  NAVIGATION_DRAWER_TOGGLE
)