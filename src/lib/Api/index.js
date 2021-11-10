import axios from 'axios';

import {config} from '../../Global';

export default class ApiService {
    setApi({ url, method, params, data, headers = {} }) {
        return axios({
            url,
            method,
            data,
            params,
            baseURL: config.DEV_URL2,
            headers: { 'Content-Type': 'application/json', ...headers },
        })
    }

    async getPokemon() {
        return this.setApi({
            url: `berry/1/`,
            method: 'get',
            // data: { username: phone },
        })
    }
};



