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
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/kanban',
      name: 'Kanban',
      component: Kanban
    },
    {
      path: '/steps',
      name: 'Steps',
      component: Steps
    }
  ]
})
