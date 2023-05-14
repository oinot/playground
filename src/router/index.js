import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/video-player',
    // route level code-splitting
    // this generates a separate chunk (video-player.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "video-player" */ '../views/VideoPlayer.vue'),
  },
  {
    path: '/buttons',
    // route level code-splitting
    // this generates a separate chunk (buttons.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "buttons" */ '../views/Buttons.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
