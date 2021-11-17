import axios from 'axios'

import { config } from '../../Global'

export default class ApiService {
  setApi({ url, method, params, data, headers = {} }) {
    return axios({
      url,
      method,
      data,
      params,
      baseURL: config.DEV_URL,
      headers: { 'Content-Type': 'application/json', ...headers },
    })
  }

  async getSlack() {
    return this.setApi({
      url: `slack`,
      method: 'get',
    })
  }

  // async getCharacter() {
  //   return this.setApi({
  //     baseURL: config.RMDEV_URL,
  //     url: `character/5`,
  //     method: 'get',
  //   })
  // }
}
