import { createApp } from 'vue';
import App from '@/App.vue';
import router from "@/router/router";
import axios from 'axios';



axios.defaults.baseURL= 'http://localhost:5000/'
createApp(App)
    .use(router)
    .mount('#app')

    