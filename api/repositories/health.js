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
  createQuote(payload) {
    return $axios.$post('/agent/health/create',
      payload,
      { headers });
  },

  // Submit a Hospital Cash Standard form
  // POST
  submitHospitalCashStandardForm(payload) {
    return $axios.$post('/user/health/hospital_cash_request',
      payload,
      { headers });
  },

  // Fetch offers using the id of the already submitted Hospital Cash standard form
  // PUT
  fetchOffers(payload) {
    return $axios.$put('/user/health/offers',
      payload,
      { headers });
  },

  // Fetch policy details using policy id passed as payload
  // GET
  policyDetail(payload) {
    return $axios.$get(`/user/health/policy`, {
      params: payload,
      headers
    });
  },

  // Fetch Policy owner Details using policy id passed as payload
  // GET
  policyOwner(payload) {
    return $axios.$get("/user/health/owner",{
      params: payload,
      headers
    });
  },

  // Fetch Policy claims created using policy id passed as payload
  // GET
  fetchClaims(payload) {
    return $axios.$get("/user/health/claims",{
      params: payload,
      headers
    });
  },

  // Create claim for selected policy
  // POST
  createClaim(payload) {
    return $axios.$post(`/user/health/claim/create`,
      payload,
      { headers });
  },
})
