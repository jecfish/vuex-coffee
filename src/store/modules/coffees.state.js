import coffee from '../../api/coffee.api'

// initial state
const state = {
  list: []
}

// getters
const getters = {}

// actions
const actions = {
  // getCoffeeList({ commit }) {
  //   coffee
  //     .getList()
  //     .then(list => {
  //       commit("getListSuccess", list);
  //     })
  //     .catch(err => {
  //       commit("getListFailure", err);
  //       return err;
  //     });
  // },

  async getCoffeeList({ commit }) {
    try {
      const list = await coffee.getList();
      commit("getListSuccess", list);
    } catch (err) {
      commit("getListFailure", err);
      return err;
    }
  }
}

// mutations
const mutations = {
  getListSuccess(state, coffees) {
    state.list = coffees
  },
  getListFailure(state) {
    state.list = [];
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