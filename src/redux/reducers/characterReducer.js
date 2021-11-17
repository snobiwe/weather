import { CHANGE_NAME, CHANGE_LOCATION } from '../actionTypes'
import initialState from '../initialState'

const characterReducer = (state = initialState.rickAndMorty, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.value }
    case CHANGE_LOCATION:
      return { ...state, location: action.value }

    default:
      return state
  }
}

export default characterReducer
