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
  viewSelfie(payload) {
    return $axios
      .$get(`/kyc/view-selfie-image/${payload}`, {
        headers
      });
  },

  viewIdentityDocument(payload) {
    return $axios
      .$get(`/kyc/view-identity-document/${payload}`, {
        headers
      });
  },

  viewUtilityBill(payload) {
    return $axios
      .$get(`/kyc/view-utility-bill/${payload}`, {
        headers
      });
  },

  verifyUserIdentity(payload) {
    return $axios
      .$get(`/kyc/verify-user-identity/${payload}`, {
        headers
      });
  },

  unVerifyUserIdentity(payload) {
    return $axios
      .$get(`/kyc/unverify-user-identity/${payload}`, {
        headers
      });
  },
})
