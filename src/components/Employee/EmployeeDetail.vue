<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
    <template v-slot:activator="{ on, attrs }">
            <v-icon
                 v-bind="attrs"
                v-on="on"
                small
                class="mr-2"
                @click="editItem(item.id)"
                color="green"
            >
                mdi-eye
            </v-icon>
    </template>
    <v-card>
        <v-card-title>
          <span class="text-h5">Use Google's location service?</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-row>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Full Name</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.name}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Phone Number</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.phone}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Email</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.email}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>City</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.city}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Tin Number</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.tin}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>House Number</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.homeNumber}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Birth Date</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.birthDate}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Work Position</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.postion}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Hiring Date</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.hiringDate}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Salary</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.salary}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Allowance</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.allowance}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Account</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.account}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Work Type</v-list-item-title>
                            <v-list-item-subtitle>{{employeeData.workType}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
            
            
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Close
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
                name:'Abebe Belay',
                phone:'0956897845',
                email:'abebe@gmail.com',
                city:'Addis Ababa',
                tin:'00994567',
                homeNumber:'345',
                birthDate: '2/14/1990',
                postion: 'IT Officer',
                hiringDate: '5/06/2014',
                salary: '5863',
                allowance: '1000',
                account: '1000235698745',
                workType: 'Permanent'
            }
        }
    },
    methods: {
        
    }
  }
</script>