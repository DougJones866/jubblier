import {
    createWebHistory,
    createRouter
} from "vue-router";
// import Home from '@/views/Home.vue';
// import Samples from '@/view/Samples.vue';
const JubbyHome = () => import('./views/JubbyHome.vue');
const Samples = () => import('./views/Samples.vue');
const NotFound = () => import('./views/NotFound.vue');



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: JubbyHome, alias: '/jubblier'
        },
        {
            path: "/home",
            component: JubbyHome,
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