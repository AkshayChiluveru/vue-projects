import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect:"/contacts",
      component: Home
    },
    {
      path: '/contacts',
      name: 'ContactManager',
      component: () => import('../views/ContactManager.vue')
    },
    {
      path: '/contacts/add',
      name: 'AddContact',
      component: () => import('../views/AddContact.vue')
    },
    {
      path: '/contacts/edit/:contactId',
      name: 'EditContact',
      component: () => import('../views/EditContact.vue')
    },
    {
      path: '/contacts/view/:contactId',
      name: 'ViewContact',
      component: () => import('../views/ViewContact.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: () => import('../views/PageNotFound.vue')
    }
  ]
})

export default router
