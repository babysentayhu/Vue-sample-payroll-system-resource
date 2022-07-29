<template>
  <v-card elevation="5" outlined>
    <v-card-title>
        <v-row>
            <v-col colls="1">
              <add-payroll v-on:registerEmployee="registerEmployee" />
            </v-col>
            <v-col colls="1">
                <v-select
                    :items="['','2021', '2022', '2023', '2024', '2025', '2026', '2027','2028','2029','2030','2031','2032']"
                    label="Year"
                    v-model="search"
                    required
                    ></v-select>
            </v-col>
            <v-col colls="3">
                <v-select
                    :items="['','Managment', 'IT', 'Finance', 'Marketing']"
                    label="Department"
                    v-model="search"
                    required
                    ></v-select>
            </v-col>
            <v-col colls="4">
                <v-select
                    :items="['','September', 'October', 'December', 'January', 'February', 'March','April','May','June','July','Auguest']"
                    label="Search by Month"
                    v-model="search"
                    required
                ></v-select>
            </v-col>
            <v-col colls="3"> 
                <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search any thing..."
                single-line
                hide-details
                ></v-text-field>
            </v-col>
        </v-row>
     
    </v-card-title>
    <v-btn >
        <v-icon small
        class="mr-2">
        mdi-printer</v-icon>Print
    </v-btn>
    <v-divider></v-divider>
    <v-card-text>
    <v-data-table
        :headers="$store.state.payroll.headers"
        :items="$store.state.payroll.payroll"
        :search="search"
        >
        <template v-slot:[`item.actions`]="{ item }">
            <payroll-detail />
            <v-icon
                small
                class="mr-2"
                @click="editItem(item.id)"
                color="blue"
            >
                mdi-printer
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
import AddPayroll from './AddPayroll.vue'
import PayrollDetail from './PayrollDetail.vue'
  export default {
    components:{
        AddPayroll,
        PayrollDetail
    },
    data () {
      return {
        search: '',
      }
    },
    methods: {
        registerEmployee(value){
          this.$store.state.employee.push(value)
        }
    },
  }
</script>

<style>

</style>