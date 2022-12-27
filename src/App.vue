<script setup>
    import NavBar from '@/components/NavBar.vue';

</script>



<template>

  <v-app class="bg-grey-lighten-4">
    
    <v-main>
        <NavBar />
        
        <router-view class="mx-4 mb-4" />
    </v-main>
  </v-app>

</template>


<style>
    /* .toolbar{
        position: fixed;
    } */

</style>
