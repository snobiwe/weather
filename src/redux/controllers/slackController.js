import ApiService from '../../lib/Api/Api'
import { CHANGE_ALL } from '../actionTypes'
import store from '../store'

export class SlackController {
  api = new ApiService()
  async getSlack() {
    try {
      const { data } = await this.api.getSlack()
      store.dispatch({
        type: CHANGE_ALL,
        value: data,
      })
    } catch (e) {
      console.log(e)
    }
  }
}
