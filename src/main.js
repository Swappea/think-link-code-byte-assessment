import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import DashboardPage from './pages/Dashboard/DashboardPage.vue';
import PlaceholderPage from './pages/PlaceholderPage.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardPage,
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: PlaceholderPage,
  },
  {
    path: '/orders',
    name: 'orders',
    component: PlaceholderPage,
  },
  {
    path: '/customers',
    name: 'customers',
    component: PlaceholderPage,
  },
  {
    path: '/reports',
    name: 'reports',
    component: PlaceholderPage,
  },
  {
    path: '/settings',
    name: 'settings',
    component: PlaceholderPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

const app = createApp(App);

app.use(router);

app.mount('#app');
