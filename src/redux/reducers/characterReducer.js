import { CHANGE_NAME, CHANGE_STATUS, CHANGE_EVERYTHING } from '../actionTypes'
import initialState from '../initialState'

const characterReducer = (state = initialState.rickAndMorty, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.value.name }
    case CHANGE_STATUS:
      return { ...state, location: action.value.status }
    case CHANGE_EVERYTHING:
      return { ...state, ...action.value }
    default:
      return state
  }
}

export default characterReducer
