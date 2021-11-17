import ApiService from '../../lib/Api/Api'
import store from '../store'
import { CHANGE_ALL } from '../actionTypes'

export class SlackController {
  api = new ApiService()
  async getSlack() {
    try {
      const { data } = await this.api.getSlack()
      store.dispatch({
        type: CHANGE_ALL,
        value: data,
      })
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}
