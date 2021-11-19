import axios from 'axios'

import { config } from '../../Global'

export default class ApiService {
  setApi({ url, method, params, data, baseURL, headers = {} }) {
    return axios({
      url,
      method,
      data,
      params,
      baseURL,
      headers: { 'Content-Type': 'application/json', ...headers },
    })
  }

  async getSlack() {
    return this.setApi({
      url: `slack`,
      method: 'get',
      baseURL: config.DEV_URL,
    })
  }

  async getCharacter() {
    return this.setApi({
      url: `character/5`,
      method: 'get',
      baseURL: config.RMDEV_URL,
    })
  }
}
