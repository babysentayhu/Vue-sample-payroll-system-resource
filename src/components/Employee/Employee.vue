<template>
  <v-card elevation="5" outlined>
    <v-card-title>
        <v-row>
            <v-col colls="4">
              <add-employee v-on:registerEmployee="registerEmployee" />
            </v-col>
            <v-col colls="8"> 
                <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                ></v-text-field>
            </v-col>
        </v-row>
     
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
    <v-data-table
        :headers="headers"
        :items="employee"
        :search="search"
        >
        <template v-slot:[`item.actions`]="{ item }">
            <employee-detail />
            <v-icon
                small
                class="mr-2"
                @click="editItem(item.id)"
                color="blue"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item.id)"
                 color="red"
            >
                mdi-delete
            </v-icon>
        </template>
    </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import AddEmployee from './AddEmployee.vue'
import EmployeeDetail from './EmployeeDetail.vue'
  export default {
    components:{
        AddEmployee,
        EmployeeDetail
    },
    data () {
      return {
        search: '',
       
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
    },
    methods: {
        registerEmployee(value){
           this.employee.push(value)
           console.log(this.employee)
        }
    },
  }
</script>

<style>

</style>