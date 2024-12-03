import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home/index.vue';
import AgendamentoView from '../views/Agendamento/index.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/agendamento',
      name: 'Agendamento',
      component: AgendamentoView,
    },
  ],
});

export default router;