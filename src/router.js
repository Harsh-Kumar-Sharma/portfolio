import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from './home.vue';
import About from './about.vue';
import Work from './work.vue';
import Contact from './testimonial.vue';
import service from './service.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/service',
    name: 'Service',
    component: service
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
