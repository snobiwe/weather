import { combineReducers } from 'redux'
import changeReducer from './changeReducer'
import characterReducer from './characterReducer'

export default combineReducers({
  changeReducer,
  characterReducer,
})
