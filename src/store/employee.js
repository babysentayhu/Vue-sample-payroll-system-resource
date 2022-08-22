
    const state = {
        headers: [
          { text: 'Full Name',align: 'start',value: 'name'},
          { text: 'Phone No', value: 'phone' },
          { text: 'Email', value: 'email' },
          { text: 'Tin NO', value: 'tin' },
          { text: 'Work Type', value: 'workType' },
          { text: 'Bank Account', value: 'account' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        employee: [
          {
            name: 'Abel Tesfaye',
            phone: '0956457896',
            email: 'able@gmail.com',
            tin: '00123654',
            workType: 'Permanent',
            account: '1000456789523',
          },
          {
            name: 'Ephrem Neguse',
            phone: '0900457896',
            email: 'emprem@gmail.com',
            tin: '00563654',
            workType: 'Contractual',
            account: '1000478789523',
          },
          {
            name: 'Mikiyas Tadele',
            phone: '0911787896',
            email: 'mikiyas@gmail.com',
            tin: '00568654',
            workType: 'Part-Time',
            account: '1000400189523',
          },
          
        ],
        
        
    }
    const getters = {
    }
    const mutations = {
      addEmployee(state, employee) {
        state.employee.push(employee);
        console.log(`form mutation the object is ${employee}`)
      }
    }
    const actions = {
      addEmployee({commit}, employee) {
        commit('addEmployee',employee);
      }
    }
export default {
    namespaced: true,    
    state,
    getters,
    actions, 
    mutations
}