import Vue from 'vue'
import Router from 'vue-router'
import Kanban from '@/components/Kanban'
import Steps from '@/components/Steps'
import Orm from '@/components/Orm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/step/1'
    },
    {
      path: '/step/:group_id',
      name: 'Steps',
      component: Steps
    },
    {
      path: '/kanban',
      name: 'Kanban',
      component: Kanban
    },
    {
      path: '/orm',
      name: 'Orm',
      component: Orm
    }
  ]
})
