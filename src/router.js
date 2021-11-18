import {
    createWebHistory,
    createRouter
} from "vue-router";
// import Home from '@/views/Home.vue';
// import Samples from '@/view/Samples.vue';
const Home = () => import('./views/Home.vue');
const Samples = () => import('./views/Samples.vue');



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/home'
        },
        {
            path: "/home",
            name: 'Home',
            component: Home,
        },
        {
            path: "/samples",
            name: 'Samples',
            component: Samples,
        }
    ]

})

export default router;