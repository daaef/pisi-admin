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
  addBank(payload) {
    return $axios.$post('/admin/add-bank', payload,       { headers });
  },
  updateBank(payload) {
    return $axios.$patch('/admin/update-bank', payload,       { headers });
  },
  deleteBank(payload) {
    return $axios.$delete('/admin/remove-bank', payload,       { headers });
  }
})
