// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Icon from 'vue-awesome'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'normalize.css'
import 'animate.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.use(ElementUI, { locale })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
