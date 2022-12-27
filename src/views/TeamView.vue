<script setup>
    import { ref } from 'vue'

    const team = ref([
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/images/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/images/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/images/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/images/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/images/avatar-5.png'}
    ])



</script>


<template>
  <div class="team">
    <h1 class="text-subtitle-1 text-grey">Team</h1>
    <v-container class="my-5">
        <v-row>        
            <template v-for="person in team" :key="person.name">
            <v-col cols="12" sm="6" md="4" lg="3">
                    <v-card flat class="text-center ma-1">
                        <v-responsive class="pt-4">images here</v-responsive>
                        <v-card-text>
                            <v-avatar size="100" class="bg-grey-lighten-2">     
                                <v-img :src="`${person.avatar}`" :alt="`${person.name}`"></v-img>                   
                            </v-avatar>
                            <div class="text-subtitle-1">{{ person.name }}</div>
                            <div class="text-grey">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="grey" prepend-icon="mdi-message-text" size="small">Message</v-btn>
                        </v-card-actions>
                    </v-card>   
            
            </v-col>
            </template>
        </v-row>


    </v-container>
  </div>
</template>
