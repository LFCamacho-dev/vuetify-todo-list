<script setup>
    import { ref } from 'vue'
    import PopUp from './PopUp.vue';


    const drawer = ref(false)
    const links = ref([
        { icon: "mdi-view-dashboard", title: "Dashboard", route: "/" },
        { icon: "mdi-folder", title: "My Projects", route: "/projects" },
        { icon: "mdi-account", title: "Team", route: "/team" },
    ])

    const snackbar = ref(null)
    const timeout = ref(2000)

    const popping = () => {
        snackbar.value = true
    }


</script>


<template>
    <nav>

        <div class="text-center">
    

    <v-snackbar
      v-model="snackbar" 
      :timeout="timeout"
    >
      Project Successfuly Added :D

      <template v-slot:actions>
        <v-btn
          color="blue"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>

        <v-toolbar>
            <v-app-bar-nav-icon @click="drawer = !drawer" color="grey"></v-app-bar-nav-icon>
            <v-toolbar-title><span class="font-weight-thin text-grey">TODO</span><span class="font-weight-bold text-grey text-uppercase">Ninja</span> </v-toolbar-title>
            <v-spacer></v-spacer>

<!--  -->

        <v-btn
            color="grey"
            append-icon="mdi-chevron-down"
            class="d-none d-sm-flex"
            >
            Menu 
            <v-menu activator="parent">    
                <v-list>
                    <v-list-item
                    v-for="(link, index) in links"
                    :key="index"
                    :to="link.route"
                    >
                    <v-list-item-title>{{ link.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>                       
            </v-menu>
        </v-btn>        

<!--  -->

            <v-btn flat color="grey" append-icon="mdi-exit-to-app">Sign Out</v-btn>
        </v-toolbar>
       <v-navigation-drawer
          class="bg-primary"
          v-model="drawer"
          floating
          permanent
          >
            <v-row class="mt-5">
                <v-col align="center">
                    <v-avatar size="100" class="bg-grey-lighten-2">     
                        <v-img src="/images/avatar-1.png"></v-img>                   
                    </v-avatar>
                    <p class="text-white text-subtitle-1 mt-1">The Net Ninja</p>
                </v-col>

            </v-row>
                <v-col class="mt-4">
                    <PopUp @popping="popping" />
                </v-col>
            

            <v-list v-for="link in links" :key="link.title">
                <v-list-item :prepend-icon="link.icon" :title="link.title" :to="link.route"></v-list-item>
            </v-list> 
            
        </v-navigation-drawer>
    </nav>
    
</template>
