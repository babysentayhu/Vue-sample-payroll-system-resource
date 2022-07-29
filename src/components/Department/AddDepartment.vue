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
            <v-icon  dense small>mdi-cash-multiple</v-icon> Add Department
            </v-btn>
    </template>
    <v-card>
       
        <v-card-title>
          <span class="text-h5">Add Department </span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-form ref="form">
            <v-row>
                    <v-col
                        cols="12"
                        >
                        <v-text-field
                        label="Department Name"
                        required
                        outlined
                        v-model="department.name"
                        ></v-text-field>
                    </v-col>
                   
                    <v-col
                        cols="12"
                        
                    >
                        <v-textarea
                        label="Description of the department..."
                        required
                        outlined
                        v-model="department.description"
                        ></v-textarea>
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
            @click="saveDepartment"
          >
            Add Department
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
            department: {
                name:'',
                description: ''
            }
        }
    },
    methods: {
        saveDepartment(){
            this.$emit("registerDepartment", this.department);
            this.dialog = false;
        }
    }
  }
</script>