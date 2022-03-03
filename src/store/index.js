import { createStore } from 'vuex'

import auth from './modules/common/auth'
import shell from './modules/common/shell'

import advancedOrders from './modules/features/advancedOrders'
import dcb from './modules/features/dcb'
import hrBridge from './modules/features/hrBridge'
import inventory from './modules/features/inventory'
import finance from './modules/features/finance'

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    shell,
    advancedOrders,
    dcb,
    hrBridge,
    inventory,
    finance,
  },
})

export default store
