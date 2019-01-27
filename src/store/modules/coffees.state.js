import coffee from '../../api/coffee.api'

// initial state
const state = {
  list: []
}

// getters
const getters = {}

// actions
const actions = {
  async getCoffeeList({ commit }) {
    const list = await coffee.getList()
    commit('setList', list)
  }
}

// mutations
const mutations = {
  setList(state, coffees) {
    state.list = coffees
  },
  getCoffeeListSync(state) {
    const list = coffee.getListSync()
    state.list = list
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}