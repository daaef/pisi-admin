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
    users: [
      {
        id: 1,
        name: 'Matthew Ero',
        location: 'Nigeria',
        active: false
      },
      {
        id: 2,
        name: 'Jace Rodman',
        location: 'Nigeria',
        active: false
      },
      {
        id: 3,
        name: 'Tunde Ojigho',
        location: 'Nigeria',
        active: false
      },
      {
        id: 4,
        name: 'Jace Rodman',
        location: 'Nigeria',
        active: false
      },
      {
        id: 5,
        name: 'Jace Rodman',
        location: 'Nigeria',
        active: false
      },
      {
        id: 6,
        name: 'Jace Rodman',
        location: 'Nigeria',
        active: false
      }
    ],
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
  updateActiveUser(state, payload) {
    state.users[payload].active = true
  },
  resetActiveUser(state) {
    state.users.forEach((user) => (user.active = false))
  }
}

export const actions = {
  getUsers({ commit, rootState }, payload) {
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
  }
}

export const getters = {
  users(state) {
    return state.users
  },
  countries(state) {
    return state.countries
  }
}
