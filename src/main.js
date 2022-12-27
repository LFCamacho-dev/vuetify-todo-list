import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#9652ff',
                    success: '#3cd1c2',
                    info: '#ffaa2c',
                    error: '#f83e70'
                },
    },
    },
    },
})


createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
