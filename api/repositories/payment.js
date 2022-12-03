/**
 * Author: Afekhide Gbadamosi
 * Date: 4th December 2021
 **/

// header for Axios calls
const headers = {
  'Content-type': 'application/json'
}

// Axios instance registered in nuxt.config is received here for api calls
export default ($axios) => ({

  /**
   * Generate payment initialization URL upon setting the data necessary for initialization.
   * PUT
   **/
  InitializePayment(payload) {
    return $axios.$put('/user/payment/transaction/initialize',
      payload,
      { headers });
  },
})
