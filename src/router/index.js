import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/KkHomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dcb',
      name: 'DCB',
      component: () =>
        import(/* webpackChunkName: "dcb" */ '@/pages/dcb/KkDcbPage.vue'),
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: () =>
        import(
          /* webpackChunkName: "inventory" */ '@/pages/inventory/KkInventoryPage.vue'
        ),
    },
    {
      path: '/advanced-orders',
      name: 'Advanced Orders',
      component: () =>
        import(
          /* webpackChunkName: "advanced-orders" */ '@/pages/advancedOrders/KkAdvancedOrdersPage.vue'
        ),
    },
    {
      path: '/hr-bridge',
      name: 'HR Bridge',
      component: () =>
        import(
          /* webpackChunkName: "hr-bridge" */ '@/pages/hrBridge/KkHrBridgePage.vue'
        ),
    },
    {
      path: '/finance',
      name: 'Finance',
      component: () =>
        import(
          /* webpackChunkName: "finance" */ '@/pages/finance/KkFinancePage.vue'
        ),
    },
  ],
})

export default router
