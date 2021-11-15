import { createStore } from 'redux'
import initialState from './initialState'
import reducer from './reducers/index'

const store = createStore(reducer)

export default store
