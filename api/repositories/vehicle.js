/**
 * Author: Afekhide Gbadamosi
 * Date: 4th December 2021
 **/

// header for Axios calls
const headers = {
  'Vehicle-type': 'application/json'
}

// Axios instance registered in nuxt.config is received here for api calls
export default ($axios) => ({

  // Fetch vehicle details from vehicle license plates sent as payload
  // GET
  getVehicleInfo(payload) {
    return $axios
      .$get(`/vehicle/particular_info`, {
        params: payload,
        headers
      });
  },
  // Creating a Vehicle quote request
  // POST
  createQuote(payload) {
    return $axios.$post('/agent/vehicle/create',
      payload,
      { headers });
  },

  // Submit a Comprehensive Vehicle Standard form
  // POST
  submitComprehensiveStandardForm(payload) {
    return $axios.$post('/user/vehicle/private_motor_comprehensive_request',
      payload,
      { headers });
  },

  // Submit a Third-Party Vehicle Standard form
  // POST
  submitThirdPartyStandardForm(payload) {
    return $axios.$post('/user/vehicle/private_motor_third_party_request',
      payload,
      { headers });
  },
  // Fetch offers using the id of the already submitted home Vehicle standard form
  // PUT
  fetchOffers(payload) {
    return $axios.$put('/user/vehicle/offers',
      payload,
      { headers });
  },


  // Fetch policy details using policy id passed as payload
  // GET
  policyDetail(payload) {
    return $axios.$get(`/user/vehicle/policy`, {
      params: payload,
      headers
    });
  },

  // Fetch Policy owner Details using policy id passed as payload
  // GET
  policyOwner(payload) {
    return $axios.$get("/user/vehicle/owner",{
      params: payload,
      headers
    });
  },

  // Fetch Policy claims created using policy id passed as payload
  // GET
  fetchClaims(payload) {
    return $axios.$get("/user/vehicle/claims",{
      params: payload,
      headers
    });
  },
  // Create claim for selected policy
  // POST
  createClaim(payload) {
    return $axios.$post(`/user/vehicle/claim/create`,
      payload,
      { headers });
  },
})
