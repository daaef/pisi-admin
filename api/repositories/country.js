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
   * Fetch Colors of vehicles
   * GET
   **/
  addCountry(payload) {
    return $axios.$post('/admin/add-country', payload,       { headers });
  },
  updateCountry(payload) {
    return $axios.$patch('/admin/update-country', payload,       { headers });
  },
  deleteCountry(payload) {
    return $axios.$delete('/admin/remove-country', payload,       { headers });
  },
  uploadCountry(payload) {
    return $axios.$post('/admin/upload-countries', payload,       { headers });
  }

})
