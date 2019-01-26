import coffee from '../../api/coffee'

// initial state
const state = {
  list: []
}

// getters
const getters = {}

// actions
const actions = {
  getCoffeeList ({ commit }) {
    coffee.getList()
      .then(list => {
      commit('setList', list)
    })
  }
}

// mutations
const mutations = {
  setList (state, coffees) {
    state.list = coffees
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}