import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    crash:false
  },
  mutations: {
    crash(state){
      state.crash=!state.crash
    }
  },
  actions: {
  },
  modules: {
  }
})
