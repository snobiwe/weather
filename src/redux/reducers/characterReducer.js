import { CHANGE_NAME, CHANGE_LOCATION } from '../actions/changeCharacter'

const characterReducer = (state, action) => {
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
