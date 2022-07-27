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
            <v-icon  dense small>mdi-account-plus</v-icon> Add Employee
            </v-btn>
    </template>
    <v-card>
       
        <v-card-title>
          <span class="text-h5">Employee Detail</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-form ref="form">
            <v-row>
                
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        label="Full Name"
                        v-model="employeeData.name"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        label="Phone Number"
                        hint="enter like 0911223344"
                        v-model="employeeData.phone"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        label="Email"
                        required
                        v-model="employeeData.email"
                        ></v-text-field>
                    </v-col>
                    <v-col 
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                        label="City"
                        required
                        v-model="employeeData.city"
                        ></v-text-field>
                    </v-col>
                    <v-col 
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                        label="Tin Number"
                        required
                        v-model="employeeData.tin"
                        ></v-text-field>
                    </v-col>
                    <v-col 
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                        label="Home Number"
                        required
                        v-model="employeeData.homeNumber"
                        ></v-text-field>
                    </v-col>
                    <v-col 
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                        label="Date of Birth"
                        required
                        v-model="employeeData.birthDate"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <v-select
                        :items="['Marketing Officer', 'IT Officer', 'Accountant', 'Assistant Manager']"
                        label="Position"
                        v-model="employeeData.postion"
                        required
                        ></v-select>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <v-select
                        :items="['Permanent', 'Contract', 'Part-Time']"
                        label="Work Type"
                        v-model="employeeData.workType"
                        required
                        ></v-select>
                    </v-col>
                    <v-col 
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                        label="Hiring Date"
                        required
                        v-model="employeeData.hiringDate"
                        ></v-text-field>
                    </v-col>
                    <v-col 
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                        label="Basic Salary"
                        type="number"
                        v-model="employeeData.salary"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col 
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                        label="Allowance"
                        type="number"
                        required
                        v-model="employeeData.allowance"
                        ></v-text-field>
                    </v-col>
                    <v-col 
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                        label="Account Number"
                        type="number"
                        required
                        v-model="employeeData.account"
                        ></v-text-field>
                </v-col>
                <!-- <v-col
                    cols="12"
                    sm="6"
                >
                    <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                    ></v-autocomplete>
                </v-col> -->
               
            </v-row>
             </v-form>
          </v-container>
          <small>*indicates required field</small>
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
            @click="saveEmployee"
          >
            Register
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