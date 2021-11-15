import ApiService from '../../lib/Api/slackApi'
import store from '../store'
import { CHANGE_ALL } from '../actions/changeUsername'

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
// const api = new ApiService() // FIXME: Мы избавимся

//   const getSlack = (async () => {
//     try {
//       const { data } = await api.getSlack()

//     } catch (e) {
//       console.log(e)
//     }
//   }, [])

//   console.log(slack)

//   useEffect(() => {
//     ;(async () => {
//       await getSlack()
//     })()
//   }, [])
