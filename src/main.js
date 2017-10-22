// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
// import App from './App'
import Login from './Login'
import router from './router'
import('../node_modules/vuetify/dist/vuetify.min.css')
import('./assets/css/custom.css')

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#login',
  router,
  template: '<Login/>',
  components: { Login }
})
