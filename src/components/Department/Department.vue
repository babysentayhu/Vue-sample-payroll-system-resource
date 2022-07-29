<template>
  <v-card elevation="5" outlined>
    <v-card-title>
        <v-row>
            <v-col colls="1">
              <add-department v-on:registerDepartment="registerDepartment" />
            </v-col>
            
        </v-row>
     
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
    <v-data-table
        :headers="$store.state.department.headers"
        :items="$store.state.department.department"
        :search="search"
        >
        <template v-slot:[`item.actions`]="{ item }">
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
import AddDepartment from './AddDepartment.vue'
  export default {
    components:{
        AddDepartment,
    },
    data () {
      return {
        search: '',
      }
    },
    methods: {
        registerDepartment(value){
          this.$store.state.department.department.push(value)
        }
    },
  }
</script>

<style>

</style>