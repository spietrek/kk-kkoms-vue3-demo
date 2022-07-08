const state = {
  cash: null,
  loading: false,
}

const getters = {
  isLoading: state => state.loading,
  cashDetailTotalAmount: state => {
    return state.cash
  },
}

const mutations = {
  setCash(state, payload) {
    state.cash = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  },
}

const actions = {
  getCashAsync({ commit }) {
    commit('setLoading', true)
    commit('setCash', null)
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
