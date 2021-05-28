import { createApp } from 'vue'

import App from './App.vue'
import 'ant-design-vue/dist/antd.css'

import router from './router'

// import store from './store';
const app = createApp(App)
app.use(router).mount('#root')
