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
    nigerianStates: [],
    errors: []
  }
}

export const state = () => getDefaultState()

export const mutations = {
  setErrors(state, payload) {
    state.errors.push(payload)
  }
}

export const actions = {
  getUsers({ commit, rootState }, payload) {
    return this.$api.handle(this.$repositories.main.getUsers, payload)
  }
}

export const getters = {
  nigerianStates(state) {
    return state.nigerianStates
  }
}
