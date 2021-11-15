import axios from 'axios'

import { configRickandMorty } from '../../Global'

export default class RickAndMortyApiService {
  setApi({ url, method, params, data, headers = {} }) {
    return axios({
      url,
      method,
      data,
      params,
      baseURL: configRickandMorty.DEV_URL,
      headers: { 'Content-Type': 'application/json', ...headers },
    })
  }

  async getCharacter() {
    return this.setApi({
      url: `character/5`,
      method: 'get',
      // data: { username: phone },
    })
  }
}
