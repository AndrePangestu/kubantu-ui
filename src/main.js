// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import StarRating from 'vue-star-rating'
// import App from './App'
import App from './App'
import router from './router'
import('../node_modules/vuetify/dist/vuetify.min.css')
import('../node_modules/vue-star-rating/dist/star-rating.min.js')
import('./assets/css/custom.css')

Vue.use(Vuetify)
Vue.component('star-rating', StarRating)

Vue.config.productionTip = false

Vue.prototype.$LoggedIn = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
