import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/components/LandingPage.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/home', component: LandingPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
