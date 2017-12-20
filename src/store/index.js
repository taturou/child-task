import Vue from 'vue'
import Vuex from 'vuex'
import Counter from '@/store/Counter'
import Kanban from '@/store/Kanban'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: Counter,
    kanban: Kanban
  }
})