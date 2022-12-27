<script setup>

    import { ref, computed, defineEmits } from 'vue'
    import Datepicker from '@vuepic/vue-datepicker';
    import format from 'date-fns/format'
    import '@vuepic/vue-datepicker/dist/main.css'

    const dialog = ref(false)
    const title = ref("")
    const information = ref("")
    const date = ref(null);
    const dateError = ref(false)
    const inputRules = ref([
        v => !!v || 'Field is required, it cannot be empty',
        v => v.length >= 3 || 'Minimum length is 3 characters',
    ])


    const emit = defineEmits(['popping'])

    const formattedDate = computed(() => {
        return date.value ? format(date.value,'do MMM yyyy') : ''
    })

    const submit = () => {

        if(formattedDate.value === ""){
            dateError.value = true
        } else {
            dateError.value = false
            console.log(title.value, information.value, formattedDate.value, typeof(formattedDate.value));

            title.value = ""
            information.value = ""
            date.value = null
            dialog.value = false
            // dateError.value = false
            emit("popping")
        }
    }
</script>



<template>
  <div class="text-center">
    <v-dialog v-model="dialog" >
      <template v-slot:activator="{ props }">
        <v-btn color="success" v-bind="props" >
          Add new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
            <h2>Add a New Project</h2>
        </v-card-title>

        <v-card-text>
            <v-form @submit.prevent="submit" id="vForm" class="px-3">

               <Datepicker
                  v-model="date"
                  placeholder="Select Date"
                  :is24="true"
                  :enable-time-picker="false"
                  :auto-apply="true"
                  :min-date="new Date()"
                  :format="'do MMM yyyy'"
                  required>
                </Datepicker>

                <p v-if="dateError" class="text-caption text-error">Please select a date</p>

                <v-divider class="my-5"></v-divider>    

                <v-text-field label="Title" v-model="title" variant="underlined" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                <v-textarea label="Information" v-model="information" variant="underlined" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                                    
                <v-btn type="submit" form="vForm" class="mx-0 my-2 text-white" color="success" flat>Add project</v-btn>             
                
            </v-form>
        </v-card-text>

        
        <!-- <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </div>
</template>