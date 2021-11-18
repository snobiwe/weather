import {
  CHANGE_USERNAME,
  CHANGE_RESPONSE_TYPE,
  CHANGE_ALL,
} from '../actionTypes'
import initialState from '../initialState'

const changeReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return { ...state, name: action.value.username }
    case CHANGE_RESPONSE_TYPE:
      return { ...state, location: action.value.response_type }
    case CHANGE_ALL:
      return { ...state, ...action.value }
    default:
      return state
  }
}

export default changeReducer
