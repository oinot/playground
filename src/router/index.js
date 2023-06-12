import { createRouter, createWebHistory } from 'vue-router';
import homeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: homeView,
  },
  {
    path: '/elements',
    name: 'elements',
    component: () => import(/* webpackChunkName: "Elements" */ '../views/Elements.vue'),
    children: [
      {
        path: 'video-player',
        name: 'video-player',
        component: () => import(/* webpackChunkName: "video-player" */ '../views/VideoPlayer.vue'),
      },
      {
        path: 'buttons',
        name: 'buttons',
        component: () => import(/* webpackChunkName: "buttons" */ '../views/Buttons.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/VideoPlayer.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Buttons.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
