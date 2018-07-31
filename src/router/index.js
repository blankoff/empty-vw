import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/user/login'
import Basic from '@/pages/user/basic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/basic/',
      name: 'Basic',
      component: Basic
    }
  ]
})
