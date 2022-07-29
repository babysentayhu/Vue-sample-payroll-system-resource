import Vue from 'vue'
import Vuex from 'vuex'
import department from './department'
import employee from './employee'
import payroll from './payroll'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // month: [ 'September', 'October', 'December', 'January', 'February', 'March','April','May','June','July','Auguest']
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    employee: employee,
    payroll: payroll,
    department: department
  }
})
