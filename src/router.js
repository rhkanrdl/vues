import {createWebHistory, createRouter} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'defaultLayout',
            component: () => import ('./layout/LayoutDefault.vue'),
            children: [
                {
                    path: '/',
                    name: 'SiteHome',
                    component: () => import ('./mainPage.vue')
                }, {
                    path: '/sub1',
                    name: 'sub1',
                    component: () => import ('./sub/subPage1.vue')
                }, {
                    path: '/sub2',
                    name: 'sub2',
                    component: () => import ('./sub/subPage2.vue')
                }
            ]

        }
        // }, {
        //     path: '/',
        //     name: 'empty',
        //     component: () => import ('@/layouts/EmptyLayout.vue'),
        //     children: [
        //         {
        //             path: '/login',
        //             name: 'login',
        //             component: () => import ('@/Login.vue')
        //         }
        //     ]
        // }
    ]
});

export default router;