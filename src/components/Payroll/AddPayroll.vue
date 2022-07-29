<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
            elevation="5"
            small
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            >
            <v-icon  dense small>mdi-cash-multiple</v-icon> Add Payroll
            </v-btn>
    </template>
    <v-card>
       
        <v-card-title>
          <span class="text-h5">Generate Employee Payroll </span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-form ref="form">
            <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-select
                        :items="['Managment', 'IT', 'Finance', 'Marketing']"
                        label="Department"
                        v-model="employeeData.department"
                        required
                        ></v-select>
                    </v-col>
                   
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-autocomplete
                        :items="['', 'September', 'October', 'December', 'January', 'February', 'March','April','May','June','July','Auguest']"
                        label="Month"
                        
                        ></v-autocomplete>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-autocomplete
                        :items="['', '2022', '2023', '2024', '2025', '2026', '2027','2028','2029','2030','2031','2032']"
                        label="Year"
                        
                        ></v-autocomplete>
                    </v-col>
               
            </v-row>
             </v-form>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            type="submit"
            @click="savePayroll"
          >
            Generate
          </v-btn>
        </v-card-actions>
        
      </v-card>
    </v-dialog>
</template>
<script>
  export default {
    data(){
        return {
            dialog: false,
            employeeData: {
                name:'',
                phone:'',
                email:'',
                city:'',
                tin:'',
                homeNumber:'',
                birthDate: '',
                postion: '',
                hiringDate: '',
                salary: '',
                allowance: '',
                account: '',
                workType: ''
            }
        }
    },
    methods: {
        saveEmployee(){
            this.$emit("registerEmployee", this.employeeData);
            this.dialog = false;
        }
    }
  }
</script>