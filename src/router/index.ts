import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      redirect: '/driver'
    },

    // --- ESPACE CLIENT ---
    {
      path: '/customer',
      name: 'customer-home',
      component: () => import('@/pages/customer/home.vue'),
      meta: {
        title: 'Client'
      }
    },

    // --- ESPACE DRIVER ---
    {
      path: '/driver',
      name: 'driver-home',
      component: () => import('@/pages/driver/home.vue'),
      meta: {
        title: 'Driver'
      }
    },
  ],
})

router.beforeEach((to) => {
  document.title = (to.meta.title as string) || 'Smart Order'
})

export default router