import Vue from 'vue'
import Vuex from 'vuex'
import { install as VuexORMInstall } from 'vuex-orm'
import Kanban from '@/store/Kanban'
import Task from '@/store/Task'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    kanban: Kanban
  },
  plugins: [
    VuexORMInstall(Task, {namespace: 'task'})
  ]
})