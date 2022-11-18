import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AmiiboList from '../views/AmiiboList.vue'
import AmiiboDetails from '../views/AmiiboDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/amiiboList',
      name: 'amiiboList',
      component: AmiiboList
    },
    {
      path: '/amiiboList/:amiiboTail',
      name: 'amiiboDetails',
      component: AmiiboDetails
    }
  ]
})

export default router
