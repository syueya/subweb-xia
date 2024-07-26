import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App);

// 注册ElementPlus组件库
app.use(ElementPlus);


app.mount('#app');


