import { RouteRecordRaw } from 'vue-router';
import { ROUTE_NAME } from './names';
import DevLayout from '@/layouts/DevLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import PageNotFound from '@/pages/ErrorPage.vue';
import { validateDeveloper } from './guards';


export const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        name: ROUTE_NAME.MAIN,
        path: '',
        component: () => import('@/pages/MainPage.vue')
      }
    ]
  }, {
    path: '/dev',
    component: DevLayout,
    beforeEnter: validateDeveloper,
    children: [
      {
        name: ROUTE_NAME.DEV,
        path: ':developer',
        component: () => import('@/pages/DevPage.vue')
      }
    ]
  }, {
    path: "/:catchAll(.*)",
    name: ROUTE_NAME.ERROR,
    component: PageNotFound,
    meta: {
      requiresAuth: false
    }
  }
];