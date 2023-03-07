import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../views/loginPage.vue'
import registerPage from '../views/registerPage.vue'
import homePage from '../views/homePage.vue'
import detailPage from '../views/detailPage.vue'
import exportPage from '../views/exportPage.vue'
import notFoundPage from '../views/notFoundPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/register',
      name: 'register',
      component: registerPage
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detailPage
    },
    {
      path: '/export',
      name: 'export',
      component: exportPage
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: notFoundPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if ((to.name === 'login' || to.name === 'register') && localStorage.access_token) {
    next({ name: 'home' })
  } else if (to.name === 'bookmark' && !localStorage.access_token) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
