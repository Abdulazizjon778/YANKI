import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DirectoryView from "../views/DirectoryView.vue";
import ProductView from "../views/ProductView.vue";
import SelectedView from "../views/SelectedView.vue";
import ContactsView from "../views/ContactsView.vue";
import BasketView from "../views/BasketView.vue";
import ExchangeView from "../views/ExchangeView.vue";
import PaymentAndDeliveryView from "../views/PaymentAndDeliveryView.vue";
import PersonalAreaView from "../views/PersonalAreaView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/directory",
      name: "directory",
      component: DirectoryView
    },
    {
      path: '/product/:productId',
      name: "product",
      component: ProductView
    },
    {
      path: "/selected",
      name: "selected",
      component: SelectedView
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView
    },
    {
      path: "/basket",
      name: "basket",
      component: BasketView
    },
    {
      path: "/exchange",
      name: "exchange",
      component: ExchangeView
    },
    {
      path: "/payment",
      name: "payment",
      component: PaymentAndDeliveryView
    },
    {
      path: "/personal",
      name: "personal",
      component: PersonalAreaView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
