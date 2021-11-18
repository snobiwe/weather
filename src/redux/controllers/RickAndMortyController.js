import ApiService from '../../lib/Api/Api'
import store from '../store'
import { CHANGE_EVERYTHING } from '../actionTypes'

export class RickAndMortyController {
  api = new ApiService()
  async getCharacter() {
    try {
      const { data } = await this.api.getCharacter()
      store.dispatch({
        type: CHANGE_EVERYTHING,
        value: data,
      })
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}
