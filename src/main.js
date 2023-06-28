import { createApp } from 'vue';
import App from '@/App.vue';
import router from "@/router/router";
import axios from 'axios';



axios.defaults.baseURL= 'https://bokonach.onrender.com/'
createApp(App)
    .use(router, axios)
    .mount('#app')

    