/**
 * Author: Afekhide Gbadamosi
 * Date: 4th December 2021
 **/

export const strict = false

/**
 *Function responsible for returning the default state of the the projects store.
 **/
const getDefaultState = () => {
  return {
    countries: [],
    users: [],
    banks: [],
    cryptoCurrencies: [],
    currencies: [],
    errors: []
  }
}

export const state = () => getDefaultState()

export const mutations = {
  setCountries(state, payload) {
    state.countries = payload
  },
  setUsers(state, payload) {
    state.users = payload
  },
  setBanks(state, payload) {
    state.banks = payload
  },
  setCryptoCurrencies(state, payload) {
    state.cryptoCurrencies = payload
  },
  setCurrencies(state, payload) {
    state.currencies = payload
  },
  updateActiveUser(state, payload) {
    state.users[payload].active = true
  },
  resetActiveUser(state) {
    state.users.forEach((user) => (user.active = false))
  }
}

export const actions = {
  getUsers({ commit, dispatch }, payload) {
    return this.$api
      .handle(this.$repositories.main.getUsers, payload)
      .then((resp) => commit('setUsers', resp.users))
      .catch((err) => console.log('error', err))
  },
  getCountries({ commit, rootState }, payload) {
    return this.$api
      .handle(this.$repositories.country.getCountries, payload)
      .then((resp) => commit('setCountries', resp.countries))
      .catch((err) => console.log('error', err))
  },
  getBanks({ commit, rootState }, payload) {
    return this.$api
      .handle(this.$repositories.bank.getBanks, payload)
      .then((resp) => commit('setBanks', resp.banks))
      .catch((err) => console.log('error', err))
  },
  getCryptoCurrencies({ commit, rootState }, payload) {
    return this.$api
      .handle(this.$repositories.crypto.getCryptoCurrencies, payload)
      .then((resp) => commit('setCryptoCurrencies', resp.cryptoCurrencies))
      .catch((err) => console.log('error', err))
  },
  getCurrencies({ commit, rootState }, payload) {
    return this.$api
      .handle(this.$repositories.main.getCurrencies, payload)
      .then((resp) => commit('setCurrencies', resp.currencies))
      .catch((err) => console.log('error', err))
  },
  toggleUserStatus({commit, dispatch}, payload) {
    return this.$api
    .handle(this.$repositories.main.setUserStatus, payload)
    .then((resp) => {
      dispatch('getUsers', {
        createdAtDateStart: '2022-10-19'
      })
    })
    .catch((err) => console.log('error', err))
  },
  addCountry({commit, dispatch}, payload) {
    return this.$api
    .handle(this.$repositories.country.addCountry, payload)
    .then((resp) => {
      this.$toast.success('Country Created')
      dispatch('getCountries')
    })
    .catch((err) => console.log('error', err))
  },
  addCurrency({commit, dispatch}, payload) {
    return this.$api
    .handle(this.$repositories.main.addCurrency, payload)
    .then((resp) => {
      this.$toast.success('Currency Created')
      dispatch('getCurrencies')
    })
    .catch((err) => console.log('error', err))
  },
  addCryptocurrency({commit, dispatch}, payload) {
    return this.$api
    .handle(this.$repositories.crypto.addCryptoCurrency, payload)
    .then((resp) => {
      this.$toast.success('Crypto Currency Created')
      dispatch('getCryptoCurrencies')
    })
    .catch((err) => console.log('error', err))
  },
  addBank({commit, dispatch}, payload) {
    return this.$api
    .handle(this.$repositories.bank.addBank, payload)
    .then((resp) => {
      this.$toast.success('Bank Created')
      dispatch('getBanks')
    })
    .catch((err) => console.log('error', err))
  },
  deleteBank({commit, dispatch}, payload){
    console.log('payload', payload)
    return this.$api
      .handle(this.$repositories.bank.deleteBank, payload)
      .then(resp => {
        this.$toast.success('Bank Deleted')
          dispatch('getBanks')
      })
  }
}

export const getters = {
  users(state) {
    return state.users
  },
  countries(state) {
    return state.countries
  },
  banks(state) {
    return state.banks
  },
  cryptoCurrencies(state) {
    return state.cryptoCurrencies
  },
  currencies(state) {
    return state.currencies
  }
}
