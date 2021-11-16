import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
// import Samples from '@/view/Samples.vue';

const history = createWebHistory();

const router = createRouter({
    history,
    routes: [{
        path: "/",
        component: Home,
    },
    // {
    //     path: "/Samples",
    //     component: Samples,
    // }
]
    
})

export default router;