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

  // Submit a Home Content Standard form
  // POST
  submitHomeContentStandardForm(payload) {
    return $axios.$post('/user/content/home_request', payload, { headers })
  },

  // Fetch offers using the id of the already submitted home content standard form
  // PUT
  fetchOffers(payload) {
    return $axios.$put('/user/content/offers', payload, { headers })
  },

  // Fetch policy details using policy id passed as payload
  // GET
  policyDetail(payload) {
    return $axios.$get(`/user/content/policy`, {
      params: payload,
      headers
    })
  },

  // Fetch Policy owner Details using policy id passed as payload
  // GET
  policyOwner(payload) {
    return $axios.$get('/user/content/owner', {
      params: payload,
      headers
    })
  },

  // Fetch Policy claims created using policy id passed as payload
  // GET
  fetchClaims(payload) {
    return $axios.$get('/user/content/claims', {
      params: payload,
      headers
    })
  },

  // Create claim for selected policy
  // POST
  createClaim(payload) {
    return $axios.$post(`/user/content/claim/create`, payload, { headers })
  }
})
