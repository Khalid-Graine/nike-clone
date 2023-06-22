import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/contactView.vue'
// import RoutesOne from '../views/'
import jordanDeatails from '../views/jordanDetails.vue'
import bagView from '../views/bagView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    // {
    //   path: '/routes/:currentId',
    //   name: 'RouteOne',
    //   component: RoutesOne
    // },
    {
      path: '/:id',
      name: 'jordanDeatils',
      component: jordanDeatails,
      props: true
    },
    {
      path: '/bag',
      name: 'bag',
      component: bagView
    }
   

  ]
})

export default router
