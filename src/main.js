import { createApp } from 'vue'

import router from './router'
import store from './store'

//创建vue实例
import App from './App.vue'
const app = createApp(App)

//引入antd
import 'ant-design-vue/dist/antd.css'
import { Layout, Button, Card } from 'ant-design-vue'

app.use(router).use(Button).use(Layout).use(Card).use(store).mount('#root')
