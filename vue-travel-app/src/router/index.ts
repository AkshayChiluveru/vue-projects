import { createRouter, createWebHistory } from 'vue-router'
import DestinationShowVue from '../views/DestinationShow.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination/:id/slug',
      name: 'destination.show',
      component: () => import('../views/DestinationShow.vue')
    }
  ]
})

export default router
