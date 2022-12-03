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

  // Register User
  // POST
  register(payload) {
    return $axios.$post(
      '/agent/account/signup',
      payload,
      { headers }
    );
  },

  // Confirm registration token received from email upon getting onboarded
  // POST method taking params of token as payload
  emailConfirmation(payload) {
    return $axios.$post('/agent/account/confirm_registration_data', null, {
      params: payload,
      headers
    })
  },

  // Confirm registration after validating token from mail
  // POST
  completeRegistration(payload) {
    return $axios.$post(
        '/agent/account/complete_signup',
        payload,
        { headers }
      );
  },

  // Forgot Password
  // PUT method taking params of email as payload
  forgotPassword(payload) {
    return $axios
      .$put(
        '/account/forgot_password',
        null,
        {
          params: payload,
          headers
        }
      );
  },

  // Validate Password token
  // PUT method taking params of token as payload
  confirmResetPassword(payload) {
    return $axios
      .$put('/account/validate_password_reset', null, {
        params: payload,
        headers
      });
  },

  // Reset Password
  // POST
  resetPassword(payload) {
    return $axios.$post(
        '/account/reset_password',
        payload, { headers }
      );
  },
})


