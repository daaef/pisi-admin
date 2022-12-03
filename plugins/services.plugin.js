/**
 * Author: Afekhide Gbadamosi
 * Date: 4th December 2021
 **/

import { Api } from '@/api.service'

export default ({ app }, inject) => {
  // new Instance of Api class.
  const api = new Api();
  // Inject $hello(msg) in Vue, context and store.
  inject('handleCall', (msg) => console.log(`Hello ${msg}!`))
  // injects imported api class into vue instance and nuxt root context
  inject('api', api)
}
