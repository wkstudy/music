import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/fonts/iconfont.css'
import './assets/css/normalize.css'
import 'lib-flexible';
import './assets/css/lib.less'
createApp(App).use(router).use(Vant).mount('#app');
