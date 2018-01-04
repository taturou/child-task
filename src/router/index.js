import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Counter from '@/components/Counter'
import Kanban from '@/components/Kanban'
import Steps from '@/components/Steps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Steps',
      component: Steps
    },
    {
      path: '/kanban',
      name: 'Kanban',
      component: Kanban
    }
  ]
})
