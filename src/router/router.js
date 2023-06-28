import {createRouter, createWebHistory} from "vue-router";

import Login from "@/pages/AdminLogin.vue"

import Main from "@/pages/Main.vue";
import Zayavka from "@/pages/Zayavka.vue";

import Uslugi from "@/pages/Uslugi.vue";
import UslugaAdd from "@/pages/UslugaAdd.vue";
import UslugaDetail from "@/pages/UslugaDetail.vue";

import AboutUs from "@/pages/AboutUs.vue";
import Gallery from "@/pages/Gallery.vue";
import Documents from "@/pages/Documents.vue";
import Contacts from "@/pages/Contacts.vue";

import News from "@/pages/News.vue";
import NewsAdd from "@/pages/NewsAdd.vue";
import NewsDetail from "@/pages/NewsDetail.vue";

const routes = [
    {
    
        path: '/login',
        name: "Login",
        component: Login,
    },
    {
        path: '/',
        name: "Main",
        component: Main,
    },
    {
        path: '/Zayavka',
        name: "Zayavka",
        component: Zayavka,
    },

    {
        path: '/Uslugi',
        name: "Uslugi",
        component: Uslugi
    },
        {
            path: '/Uslugi/Add',
            name: "UslugaAdd",
            component: UslugaAdd 
        },
        
        {
            path:'/Uslugi/:id',
            name: "UslugaDetail",
            component: UslugaDetail
        },

    {
        path: '/AboutUs',
        name: "AboutUs",
        component: AboutUs
    },
    {
        path: '/Gallery',
        name: "Gallery",
        component: Gallery
    },
    {
        path: '/Documents',
        name: "Documents",
        component: Documents
    },
    {
        path: '/Contacts',
        name: "Contacts",
        component: Contacts
    },
    
    {
        path: '/News',
        name: "News",
        component: News
    },
        {
            path:'/News/:id',
            name: "NewsDetail",
            component: NewsDetail
        },
        
        {
        path: '/News/Add',
        name: "NewsAdd",
        component: NewsAdd
        }
]
const router = createRouter(
    {
        routes,
        history: createWebHistory("http://localhost:5000/api")
    }
)
export default router;