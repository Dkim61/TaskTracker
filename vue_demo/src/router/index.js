import { createRouter, createWebHistory } from 'vue-router'
import TaskHome from '../views/TaskHome'
import AboutPage from '../views/AboutPage'

const routes = [
  {
    path: '/',
    name: 'TaskHome',
    component: TaskHome,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router