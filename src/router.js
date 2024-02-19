import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomeView.vue'
import RegisterView from "./views/RegisterView.vue";
import LoginView from "./views/LoginView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path:'/login',
      component: LoginView,
    },
    {
      path:'/register',
      component: RegisterView,
    }
  ],
})
