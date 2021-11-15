import RickAndMortyApiService from '../../lib/Api/rickAndMortyApi'
import store from '../store'
import { CHANGE_NAME } from '../actions/changeCharacter'

export class RickAndMortyController {
  api = new RickAndMortyApiService()
  async getCharacter() {
    try {
      const { data } = await this.api.getCharacter()
      store.dispatch({
        type: CHANGE_NAME,
        value: data,
      })
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}
