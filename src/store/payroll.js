
    const state = {
        headers: [
          { text: 'Full Name',align: 'start',value: 'name'},
          { text: 'Phone No', value: 'phone' },
          { text: 'Work Type', value: 'workType' },
          { text: 'Month', value: 'month' },
          { text: 'Year', value: 'year' },
          { text: 'Department', value: 'department' },
          { text: 'Basic Salary', value: 'salary' },
          { text: 'Income Tax', value: 'tax' },
          { text: 'Pension', value: 'pension' },
          { text: 'Other Deduction', value: 'deduction' },
          { text: 'Net Income', value: 'netIncome' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        payroll: [
          {
            name: 'Abel Tesfaye',
            phone: '0956457896',
            workType: 'Permanent',
            salary: '5000',
            tax: '750',
            pension: '350',
            deduction: '0',
            netIncome: '3900',
            month: 'June',
            year: '2022',
            department: 'IT'
          },
          {
            name: 'Ephrem Neguse',
            phone: '0956457896',
            workType: 'Permanent',
            salary: '5000',
            tax: '750',
            pension: '350',
            deduction: '0',
            netIncome: '3900',
            month: 'June',
            year: '2022',
            department: 'Finance'
          },
          {
            name: 'Mikiyas Tadele',
            phone: '0956457896',
            workType: 'Permanent',
            salary: '5000',
            tax: '750',
            pension: '350',
            deduction: '0',
            netIncome: '3900',
            month: 'July',
            year: '2021',
            department: 'Marketing'
          },
          
        ],
    }
    const getters = {
    }
    const mutations = {
    }
    const actions = {
    }
export default {
    namespaced: true,    
    state,
    getters,
    actions, 
    mutations
}