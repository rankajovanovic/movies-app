import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../views/Movies.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Movies,
    //meta: { authGuard: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
   // meta: { authGuard: false }
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
   // meta: { authGuard: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    //meta: { authGuard: false }
  },
]

//router.beforeEach(authGuard);
//   console.log(to, from, next);
  
//   // if (to.name !== 'Login' && !requiresAuth) next({ name: 'Login' })
//   // else next()
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
