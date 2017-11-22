
const state = {
  count: 0
}
const getters = {
  username (state) {
    return state.count + 'getters'
  }
}
const mutations = {
  add (state, value) {
    state.count = state.count + value
  }
}
const actions = {
  addAction ({ commit }) {
    console.log(arguments)
    console.log('actions')
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
