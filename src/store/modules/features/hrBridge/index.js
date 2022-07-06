const state = {
  cash: null,
}

const getters = {
  cashDetailTotalAmount: state => {
    return state.cash
  },
}

const mutations = {
  setCash(state, payload) {
    state.cash = payload
  },
  setLoading(state, payload) {
    state.isLoading = payload
  },
}

const actions = {
  getAsync({ commit }) {
    commit('setLoading', true)
    new Promise(resolve => {
      setTimeout(() => {
        const random = Math.floor(Math.random() * (1000 - 100) + 100) / 100
        commit('setCash', random)
        resolve()
      }, 1500)
    }).then(() => {
      commit('setLoading', false)
    })
  },
  updateCash({ commit }, value) {
    commit('setCash', value)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
