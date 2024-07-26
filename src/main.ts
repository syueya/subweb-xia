// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Vue3Clipboard from 'vue3-clipboard';

const app = createApp(App);

app.use(ElementPlus);

app.use(Vue3Clipboard, {
  autoSetContainer: true,
  appendToBody: true,
});


app.mount('#app')
