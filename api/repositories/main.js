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
  // Creating a content quote request
  // POST
  getUsers(payload) {
    return $axios.$post('/admin/get-users', payload, { headers })
  },
  getCurrencies(payload) {
    return $axios.$post('/user/get-currencies', payload, { headers })
  },
  addFee(payload) {
    return $axios.$post('/admin/add-fee', payload, { headers })
  },
  addCurrency(payload) {
    return $axios.$post('/admin/add-currency', payload, { headers })
  },
  deleteCurrency(payload) {
    return $axios.$delete('/admin/remove-currency', payload, { headers })
  },
  retryBlockchainTransaction(payload) {
    return $axios.$get(`/transaction/retry-blockchain-transaction/${payload}`, { headers })
  },
  sendEmail(payload) {
    return $axios.$post('/email/send-email', payload, { headers })
  },
  setUserStatus(payload) {
    return $axios.$get(`/admin/set-user-status/${payload}`, { headers })
  },
})
