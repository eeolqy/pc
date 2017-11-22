import Vue from 'vue'

import Vuex from 'vuex'
import user from './modules/user.js'
Vue.use(Vuex)
const state = {
  root: 'root',
  scrollTop: 0
}
const mutations = {
  changeScrollTop (state, value) {
    state.scrollTop = value
  }
}
const actions = {
  changeScrollTopAction ({ commit }, value) {
    commit('changeScrollTop', value)
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {user
  }
})

export default store
// eslint
