import { createWebHistory, createRouter } from "vue-router";
// import Home from '@/views/Home.vue';
// import Samples from '@/view/Samples.vue';
const Home = () => import('./views/Home.vue');
const Samples = () => import('./views/Samples.vue');

const history = createWebHistory();

const router = createRouter({
    history,
    routes: [{
        path: "/",
        name: 'Home',
        component: Home,
    },
    {
        path: "/Samples",
        name: 'Samples',
        component: Samples,
    }
]
    
})

export default router;