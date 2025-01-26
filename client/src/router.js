import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import MainVue from './Main.vue';
import About from './about.vue';
import Work from './work.vue';
// import Contact from './contact.vue';
import service from './service.vue';
import Resume from './resume.vue';
import NotFound from './NotFound.vue';  // Import the 404 page component

const routes = [
  {
    path: '/',
    name: 'MainVue',
    component: MainVue
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
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact
  // },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  // Catch-all route for 404 page
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
