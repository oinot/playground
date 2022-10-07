import { createApp } from 'vue';
import base from '@/assets/styles/base.css';
import fonts from './assets/styles/fonts.css';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(base)
  .use(fonts)
  .mount('#app');
