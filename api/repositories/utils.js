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
  getColors(payload) {
    return $axios.$get('/customer/colors', { headers });
  },

  /**
   * Fetch Vehicle Manufacture Years
   * GET
   **/
  getManufactureYears(payload) {
    return $axios.$get('/customer/manufacture_years', { headers });
  },

  /**
   * Fetch Vehicle Make Models
   * GET
   **/
  getVehicleMakeModels(payload) {
    return $axios.$get('/customer/vehicle_make_models', { headers });
  },

  /**
   * Fetch Vehicle Makes
   * GET
   **/
  getVehicleMakes(payload) {
    return $axios.$get('/customer/vehicle_makes', { headers });
  },

  /**
   * Fetch Vehicle Body Types
   * GET
   **/
  getBodyTypes(payload) {
    return $axios.$get('/customer/body_types', { headers });
  },

  /**
   * Fetch All Sub-Products on the platform with their descriptions, etc
   * GET
   **/
  getSubProducts(payload) {
    return $axios.$get('/product/sub_products', { headers });
  },

  /**
   * Fetch User Titles
   * GET
   **/
  getTitles(payload) {
    return $axios.$get('/user/titles', { headers });
  },

  /**
   * Fetch All States in Nigeria
   * GET
   **/
  getStates(payload) {
    return $axios.$get('/location/states', { headers });
  },

  /**
   * Fetch LGAs for State specified by id
   * GET
   **/
  getLGAs(payload) {
    return $axios.$get(`/location/state/lgs`, {
      params: payload,
      headers,
    });
  },

  /**
   * Fetch Hospital states_lgas pair list
   * GET
   **/
  getHospitalAddresses(payload) {
    return $axios.$get('/product/special_lgas', { headers });
  },

  /**
   * Fetch Hospitals by id of selected state_lga pair id
   * GET
   **/
  getHospitals(payload) {
    return $axios.$get('/product/hospitals', {
      params: payload,
      headers
    });
  },

  /**
   * Fetch All Uncompleted Quotes
   * GET
   **/
  getUncompletedQuotes() {
    return $axios.$get(`/agent/uncompleted_quotes`, { headers });
  },

  /**
   * GET All Active Policies
   * PUT
   **/
  getActivePolicies() {
    return $axios.$get(`/agent/active_policies`, { headers });
  },

  /**
   * Fetch All Customers
   * GET
   **/
  getAllCustomers() {
    return $axios.$get(`/agent/customers`, { headers });
  },

  /**
   * Fetch All Transactions
   * GET
   **/
  getAllTransactions() {
    return $axios.$get(`/agent/payment_transfers`, { headers });
  },

  /**
   * Fetch Metrics on Pro
   * GET
   **/
  getDashboardMetrics() {
    return $axios.$get(`/agent/metrics`, { headers });
  },

  /**
   * Fetch Data for chart
   * GET
   **/
  getDashboardChart() {
    return $axios.$get(`/agent/charts`, { headers });
  },

  /**
   * Fetch Banks
   * GET
   **/
  fetchBanks() {
    return $axios.$get(`https://api.paystack.co/bank`);
  },
})
