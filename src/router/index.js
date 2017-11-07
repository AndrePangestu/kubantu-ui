import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Feed from '@/components/Feed'
import Expert from '@/components/Expert'
import History from '@/components/History'
import Profile from '@/components/Profile'
import LoginApp from '@/components/LoginApp'
import ProfessionApp from '@/components/ProfessionApp'
import RegisterApp from '@/components/RegisterApp'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/expert',
      name: 'Expert',
      component: Expert
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/loginapp',
      name: 'LoginApp',
      component: LoginApp
    },
    {
      path: '/professionapp',
      name: 'ProfessionApp',
      component: ProfessionApp
    },
    {
      path: '/registerapp',
      name: 'RegisterApp',
      component: RegisterApp
    }
  ]
})
