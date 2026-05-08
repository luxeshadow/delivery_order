import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    // --- ESPACE CLIENT ---
    {
      path: '/customer',
      name: 'customer-home',
      component: () => import('@/pages/customer/home.vue'),
      meta: {
        title: 'Smart Order - Client'
      }
    },

    // --- ESPACE DRIVER (Chauffeur) ---
    {
      path: '/driver',
      name: 'driver-home',
      component: () => import('@/pages/driver/home.vue'),
      meta: {
        title: 'Dashboard Driver'
      }
    },


  ],
})

// Mise à jour automatique du titre de l'onglet
router.beforeEach((to) => {
  document.title = to.meta.title as string || 'Smart Order'
})

export default router