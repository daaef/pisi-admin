/**
 * Author: Afekhide Gbadamosi
 * Date: 4th December 2021
 **/

// header for Axios calls
const headers = {
  'health-type': 'application/json'
}

// Axios instance registered in nuxt.config is received here for api calls
export default ($axios) => ({
  // Creating a health quote request
  // POST
  addCryptoCurrency(payload) {
    return $axios.$post('/admin/add-crypto-currency', payload, { headers });
  },
  updateCryptoCurrency(payload) {
    return $axios.$patch(`/admin/update-crypto-currency`, payload, { headers });
  },
  deleteCryptoCurrency(payload) {
    return $axios.$delete(`/admin/remove-crypto-currency/${payload}`, { headers });
  },
  getCryptoCurrencies(payload) {
    return $axios.$get(`/user/get-crypto-currencies`, { headers });
  }
})
