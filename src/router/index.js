import Vue from 'vue'
import Router from 'vue-router'
import Drive from '@/components/drive.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'drive',
      component: Drive
    }
  ]
})
