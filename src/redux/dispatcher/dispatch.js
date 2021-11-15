import changeUsername from '../actions/changeUsername'
import store from '../store'

const dispStore = () => {
  store.dispatch(changeUsername)
  store.getState()
}
export default dispStore
