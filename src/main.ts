import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import { directive } from '/@/utils/directive';
import { i18n } from '/@/i18n/index';
import other from '/@/utils/other';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '/@/theme/index.scss';
import mitt from 'mitt';
import VueGridLayout from 'vue-grid-layout';
import { createPinia } from 'pinia';

const pinia = createPinia()
const app = createApp(App);

directive(app);
other.elSvg(app);

if (process.env.NODE_ENV !== 'production') import('/@/mock')

app
  .use(router)
  .use(store, key)
  .use(ElementPlus, { i18n: i18n.global.t })
  .use(i18n)
  .use(VueGridLayout)
  .use(pinia)
  .mount('#app');

app.config.globalProperties.mittBus = mitt();
