import { createApp } from 'vue';
import source from '@/assets/styles/source.css';
import { boxicons } from 'boxicons';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(source)
  .use(boxicons)
  .mount('#app');
