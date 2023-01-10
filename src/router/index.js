import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/ContactView.vue')
    }
  },
  {
    path: '/project',
    name: 'project',
    component: function () {
      return import('../views/ProjectView.vue')
    }
  },
  {
    path: '/resume',
    name: 'resume',
    component: function () {
      return import('../views/ResumeView.vue')
    }
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: function () {
      return import('../views/TestView.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
