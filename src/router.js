import {
    createWebHistory,
    createRouter
} from "vue-router";
// import Home from '@/views/Home.vue';
// import Samples from '@/view/Samples.vue';
const Home = () => import('./views/Home.vue');
const Samples = () => import('./views/Samples.vue');
const NotFound = () => import('./views/NotFound.vue');



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/home'
        },
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/samples",
            component: Samples,
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]

})

export default router;