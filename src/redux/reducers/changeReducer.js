import {
  CHANGE_USERNAME,
  CHANGE_RESPONSE_TYPE,
  CHANGE_ALL,
} from '../actionTypes'
import initialState from '../initialState'

const changeReducer = (state = initialState.user, action) => {
  switch (action) {
    case CHANGE_USERNAME:
      return { ...state, username: action.value }
    case CHANGE_RESPONSE_TYPE:
      return { ...state, response_type: action.value }
    case CHANGE_ALL:
      return { ...state, ...action.value }
    default:
      return state
  }
}

export default changeReducer
