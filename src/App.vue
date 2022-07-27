<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Payroll Managment
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-icon x-large color="green">mdi-circle-small</v-icon> Welcome Admin
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list rounded>
      <!-- <v-subheader>REPORTS</v-subheader> -->
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to='item.to'
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
    </v-app-bar>

   <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        selectedItem: 1,
        items: [
          { text: 'Dashboard', icon: 'mdi-monitor-dashboard', to:'/' },
          { text: 'Employee', icon: 'mdi-account-multiple', to:'/employee' },
          { text: 'Payroll', icon: 'mdi-cash-multiple', to:'/payroll' },
          { text: 'Users', icon: 'mdi-account-circle', to:'/users' },
          { text: 'Setting', icon: 'mdi-cog-outline', to:'/setting' },
          { text: 'Logout', icon: 'mdi-logout', to:'/logout' },
        ],
      }
    },
  }
</script>