import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../components/Dashboard/Dashboard.vue')
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('../components/Employee/Employee.vue')
  },
  {
    path: '/payroll',
    name: 'Payroll',
    component: () => import('../components/Payroll/Payroll.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../components/Users/Users.vue')
  },
  {
    path: '/setting',
    name: 'Company Setting',
    component: () => import('../components/Setting/CompanySetting.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
