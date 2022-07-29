
    const state = {
        headers: [
          { text: 'Department',align: 'start',value: 'name'},
          { text: 'Tototal Employee', value: 'total' },
          { text: 'Description', value: 'description' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        department: [
          {
            name: 'Marketing',
            total: '30',
            description: 'Marketing department'
          },
          {
            name: 'IT',
            total: '10',
            description: 'IT department'
          },
          {
            name: 'Finance',
            total: '5',
            description: 'Finance department'
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