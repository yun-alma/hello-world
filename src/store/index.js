import Vue from 'vue'
import Vuex from 'vuex'
import indexStore from './indexStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    indexStore
  }
})
