<template>
  <v-card elevation="5" outlined>
    <v-card-title>
        <v-row>
            <v-col colls="4">
              <!-- <add-employee v-on:registerEmployee="registerEmployee" /> -->
              <add-employee />
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
        :headers="$store.state.employee.headers"
        :items="$store.state.employee.employee"
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
      }
    },
    methods: {
        // registerEmployee(value){
        //   this.$store.state.employee.employee.push(value)
        //   console.log(this.$store.state.employee.employee)
        // }
    },
  }
</script>

<style>

</style>