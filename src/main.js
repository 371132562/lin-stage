import { createApp } from 'vue'

import router from './router'
import store from './store'

import App from './App.vue'

import 'ant-design-vue/dist/antd.css'
import { Layout, Button, InputNumber } from 'ant-design-vue'
const app = createApp(App)
app.use(router).use(Button).use(Layout).use(Button).use(Button).use(InputNumber).use(store).mount('#root')
