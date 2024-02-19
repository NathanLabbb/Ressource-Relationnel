import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import axios from  'axios';

axios.defaults.baseURL = import.meta.env.VITE_URL_API;
createApp(App).use(router).mount('#app');