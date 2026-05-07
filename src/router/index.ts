import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/customer/home.vue'),
      meta: {
        title: 'Customer Home'
      }
    }

  ],
})

router.beforeEach((to) => {
  document.title = to.meta.title as string || 'App Livraison'
})

export default router
