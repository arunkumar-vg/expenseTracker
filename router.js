import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import HomeCom from '@/components/HomeCom.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/home', component: HomeCom}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
