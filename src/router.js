import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import RegisterView from "./views/RegisterView.vue";
import LoginView from "./views/LoginView.vue";
import ArticleView from "./views/ArticleView.vue";
import CatalogueView from "./views/CatalogueView.vue";
import LegalMentionView from "./views/LegalMentionView.vue";
import PersonalDataView from "./views/PersonalDataView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path:'/login',
      component: LoginView,
    },
    {
      path:'/register',
      component: RegisterView,
    },
    {
      path:'/Article',
      component: ArticleView,
    },
    {
      path:'/Catalogue',
      component: CatalogueView,
    },
    {
      path:'/LegalMention',
      component: LegalMentionView,
    },
    {
      path:'/PersonalData',
      component: PersonalDataView,
    },
  ],
})
