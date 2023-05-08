import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '../views/AuthView.vue';
import HomeView from '../views/HomeView.vue';
import FacturaView from '../views/FacturaView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthView,
      meta:  {
        requireAuth: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta:  {
        requireAuth: true
      }
    },
    {
      path: '/factura',
      name: 'factura',
      component: FacturaView,
      meta:  {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = $cookies.isKey('auth');
  const keyAuth = to.meta.requireAuth;
  const path = to.path;
  if(auth && keyAuth){
    next();
  } else if(!keyAuth && auth) {
    next('/home');
  } else if(keyAuth && !auth) {
    next('/');
  } else if(!keyAuth && !auth) {
    next();
  }
});

export default router
