<script setup>
    import { ref } from 'vue'
    

    const projects = ref([
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    ] )

    const sortBy = (prop) => {
        projects.value.sort((a, b) => a[prop] < b[prop] ? -1 : 1 )
    }


</script>



<template>
    <div class="home">
        <h1 class="text-subtitle-1 text-grey">Dashboard</h1>
        <v-container class="my-5">
            <v-row class="mb-3">
                <v-col>
                    <v-btn
                      @click="sortBy('person')"
                      size="small"
                      color="grey"
                      variant="text"
                      flat
                      prepend-icon="mdi-folder">
                        <v-tooltip
                            activator="parent"
                            location="top"
                        >Sort projects by <em>Project Name</em>
                        </v-tooltip>
                      <span class="text-caption text-lowercase">By Project Name</span>
                      </v-btn>

                    <v-btn
                      @click="sortBy('title')"
                      size="small"
                      color="grey"
                      variant="text"
                      flat
                      prepend-icon="mdi-account">
                        <v-tooltip
                            activator="parent"
                            location="top"
                        >Sort projects by <em>Person</em>
                        </v-tooltip>
                      <span class="text-caption text-lowercase">By Person</span>
                      </v-btn>
                </v-col>
            </v-row>

            <template v-for="project in projects" :key="project.title">
            <v-card class="pl-3" flat>
                <v-row :class="`pa-3 project ${project.status}`" align="center">
                        <v-col cols="12" md="6">
                            <div class="text-caption text-grey">Project Title</div>
                            <div class="">{{ project.title }}</div>
                        </v-col>
                        <v-col cols="12" sm="4" md="2">
                            <div class="text-caption text-grey">Person</div>
                            <div class="">{{ project.person }}</div>
                        </v-col>
                        <v-col cols="12" sm="4" md="2">
                            <div class="text-caption text-grey">Due by</div>
                            <div class="">{{ project.due }}</div>
                        </v-col>
                        <v-col cols="12" sm="4" md="2">
                            <div class="float-right">
                                <v-chip size="small" :class="`${project.status} text-white text-caption`"> {{ project.status }}</v-chip>
                            </div>
                        </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-card>
            
            </template>            

        </v-container>


    </div>
</template>

<style scoped>

    .project.complete{
        border-left: 4px solid #3cd1c2
    }
    .project.ongoing{
        border-left: 4px solid orange
    }
    .project.overdue{
        border-left: 4px solid tomato
    }
    .v-chip.complete{
        background: #3cd1c2;
    }
    .v-chip.ongoing{
        background: #ffaa2c;
    }
    .v-chip.overdue{
        background: #f83e70;
    }



</style>

