import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalendarView from '../views/CalendarView.vue'
import UniversityView from '../views/UniversityView.vue'
import CoursesView from '../views/CoursesView.vue'
import EducationView from '../views/EducationView.vue'
import NotificationsView from '../views/NotificationsView.vue'
import store from "../store"

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
    meta: { title: "Login" }
  },
  {
    path: "/",
    redirect: "/home",
    meta: { title: "Campusplaner" }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { title: "Campusplaner" }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
    meta: { title: "Mein Kalender" }
  },
  {
    path: '/university',
    name: 'university',
    component: UniversityView,
    meta: { title: "Meine Hochschule" }
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesView,
    meta: { title: "Meine Kursübersicht" }
  },
  {
    path: '/education',
    name: 'education',
    component: EducationView,
    meta: { title: "Mein Studium" }
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotificationsView,
    meta: { title: "Benachrichtigungen" }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  
  if (!store.getters.isLoggedIn && to.name !== 'login') {
    // redirect the user to the login page
    return { name: 'login' }
  } else if(store.getters.isLoggedIn && to.name === 'login') {
    return { name: 'home' }
  }
})

export default router
