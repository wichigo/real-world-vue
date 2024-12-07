import { createRouter, createWebHistory } from 'vue-router'
import EvenListView from '../views/EvenListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailsView from '@/views/EventDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EvenListView,
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView,
    },
    {
      path: '/about',
      name: 'about',

      component: AboutView,
    },
  ],
})

export default router
