export default {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {
    count: state => {
      return state.count
    }
  },
  mutations: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    }
  }
}