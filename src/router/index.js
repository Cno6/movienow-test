import { createRouter, createWebHistory } from 'vue-router';
import AllMoviesPage from '@/views/AllMoviesPage.vue';

const routes = [
  { path: '/', name: 'home', component: AllMoviesPage },
  { path: '/:movieId', name: 'movie', component: () => import('@/views/MoviePage.vue') },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
